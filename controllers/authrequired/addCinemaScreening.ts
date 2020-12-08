import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening, CinemaHalls } = database.models;

import allScreeningInHall from '../../helpers/allScreeningInHall'

import isOccupied from '../../helpers/isThereAPlace';

const addCinemaScreening = async (req: Request, res: Response) => {

    try {
        const { hallID, startTime, duration, filmTitle } = req.body;

        //I know I should only download future screenings
        const foundCinemaHall = await CinemaHalls.findOne({
            where: {
                hallID,
            }
        });

        let isThereAPlace: boolean = true;
        if (!!foundCinemaHall) {
            const screeningList = await allScreeningInHall(hallID);

            type screeningData = {
                filmTitle: string,
                startTime: string,
                duration: number,
            };

            const data: screeningData[] = [];

            for (let i = 0; i < screeningList.length; i++) {
                const el = screeningList[i];

                const screeningData: screeningData = {
                    filmTitle: el.getDataValue('filmTitle'),
                    startTime: el.getDataValue('startTime'),
                    duration: el.getDataValue('duration'),
                }
                data.push(screeningData);
            }

            for (let i = 0; i < data.length; i++) {
                const el = data[i];

                const curStart: number = Date.parse(el.startTime)
                const curEnd: number = curStart + (el.duration * 60 * 1000);
                const newStart: number = Date.parse(startTime);
                const newEnd: number = Date.parse(startTime) + (duration * 60 * 1000);

                const curPlace: boolean = await isOccupied(curStart, curEnd, newStart, newEnd);
                if (!curPlace) isThereAPlace = false
            }

            if (!isThereAPlace) {
                return res.status(200).json({
                    status: `failure`,
                    msg: "The room is occupied during the given hours"
                });
            }

        }

        if (isThereAPlace) {
            const addCinemaScreening = await CinemaScreening.create({
                startTime,
                duration,
                filmTitle,
                CinemaHallHallID: hallID,
            });

            return res.status(200).json({
                status: `success`,
                msg: `We add ${filmTitle} to database.`,
            })
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with add cinema screening"
        });
    }
}

export default addCinemaScreening;