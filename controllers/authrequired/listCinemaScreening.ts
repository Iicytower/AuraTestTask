import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening, CinemaHalls } = database.models;
import allScreeningInHall from '../../helpers/allScreeningInHall'
import isHallExist from '../../helpers/isHallExist';
import { Screening } from '../../helpers/types'

const listCinemaScreening = async (req: Request, res: Response) => {

    const { hallID } = req.body;

    try {


        const isExist = await isHallExist(hallID);

        if (!isExist) {
            return res.status(404).json({
                status: `failure`,
                msg: `Hall with id ${hallID} is not exist in database.`,
            });
        }

        const screeningList = await allScreeningInHall(hallID);

        const data: Screening[] = [];
        for (let i = 0; i < screeningList.length; i++) {
            const el = screeningList[i];

            const screeningData: Screening = {
                screeningID: el.getDataValue('cinemaScreeningID'),
                filmTitle: el.getDataValue('filmTitle'),
                startTime: String(new Date(el.getDataValue('startTime'))),
                duration: el.getDataValue('duration'),
            }
            data.push(screeningData);
        }

        return res.status(200).json({
            status: 'success',
            msg: `cinema screening list in ${hallID} hall`,
            screeningList: data,
        })

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with list cinema screening"
        });
    }
}

export default listCinemaScreening;