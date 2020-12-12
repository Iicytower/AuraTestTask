import database from "../database/database";
const { CinemaScreening } = database.models;
import { Op } from 'sequelize';

import { ScreeningDb } from './types';

export default async (hallID: string, today: number = Date.parse(String(new Date()))) => {
    try {
        const screeningList = await CinemaScreening.findAll({
            where: {
                CinemaHallHallID: hallID,
                startTime: { [Op.gt]: today }
            }
        });

        const data: ScreeningDb[] = screeningList.reduce((acc: ScreeningDb[], cur)=>{
            const screeningData: ScreeningDb = {
                screeningID: cur.getDataValue('cinemaScreeningID'),
                filmTitle: cur.getDataValue('filmTitle'),
                startTime: cur.getDataValue('startTime'),
                duration: cur.getDataValue('duration'),
            }
            acc.push(screeningData);
            return acc;
        }, [])

        return data;
    } catch (err) {
        console.error(err);
        return err;
    }
}