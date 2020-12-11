import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening, CinemaHalls } = database.models;

import allScreeningInHall from '../../helpers/allScreeningInHall'
import { Screening } from '../../helpers/types';
import isOccupied from '../../helpers/isThereAPlace';

const addCinemaScreening = async (req: Request, res: Response) => {

    try {
        const { hallID, startTime, duration, filmTitle } = req.body;

        const today: number = Date.parse(String(new Date()));
        const newStart: number = Date.parse(startTime);

        if (today > newStart) {
            return res.status(400).json({
                status: "failure",
                msg: "You can't add screening in past",
            })
        }

        const foundCinemaHall = await CinemaHalls.findOne({
            where: {
                hallID,
            }
        });

        let isThereAPlace: boolean = true;
        if (!!foundCinemaHall) {
            const screeningList = await allScreeningInHall(hallID);
            const data: Screening[] = [];

            for (let i = 0; i < screeningList.length; i++) {
                const el = screeningList[i];

                const screeningData: Screening = {
                    filmTitle: el.getDataValue('filmTitle'),
                    startTime: el.getDataValue('startTime'),
                    duration: el.getDataValue('duration'),
                }
                data.push(screeningData);
            }

            for (let i = 0; i < data.length; i++) {
                const el = data[i];

                if ((el.startTime === undefined) || (el.duration === undefined)) {
                    return res.status(500).json({
                        status: `failure`,
                        msg: "Somthing goes wrong with data from database",
                    });
                }

                const curStart: number = parseInt(el.startTime);
                const curEnd: number = curStart + (el.duration * 60 * 1000);
                const newEnd: number = newStart + (duration * 60 * 1000);

                if (!await isOccupied(curStart, curEnd, newStart, newEnd)) isThereAPlace = false
            }

            if (!isThereAPlace) {
                return res.status(200).json({
                    status: `failure`,
                    msg: "The room is occupied during the given hours",
                });
            }

        }

        if (isThereAPlace) {
            const addCinemaScreening = await CinemaScreening.create({
                startTime: newStart,
                duration,
                filmTitle,
                CinemaHallHallID: hallID, //TODO normal assossiations, manually adding is bad practice
            });

            return res.status(201).json({
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