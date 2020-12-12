import database from "../database/database";
const { CinemaScreening } = database.models;
import { Op } from 'sequelize';

export default async(hallID: string, today: number = Date.parse(String(new Date()))) =>{
    try {
        const screeningList = await CinemaScreening.findAll({
            where:{
                CinemaHallHallID: hallID,
                startTime: {[Op.gt]: today}
            }
        });
        return screeningList;
    } catch (err) {
        return err;
    }
}