import { Request, Response } from 'express';
import { Op } from 'sequelize';
import database from "../../database/database";
const { CinemaHalls, CinemaScreening } = database.models;
import isHallExist from '../../helpers/isHallExist';
import allScreeningInHall from '../../helpers/allScreeningInHall';

export default async (req: Request, res: Response) => {

    const { hallID } = req.body;
    try {

        if (!await isHallExist(hallID)) {
            return res.status(404).json({
                status: `failure`,
                msg: `Hall with ID ${hallID} does not exist.`
            })
        }
        const today: number = Date.parse(String(new Date()));

        const screenings = await allScreeningInHall(hallID, Date.parse(String(new Date())) - (4 * 60 * 60 * 1000));

        for (let i = 0; i < screenings.length; i++) {
            const el = screenings[i];

            if (el.startTime + el.duration > today) {
                return res.status(400).json({
                    status: `failure`,
                    msg: "You can't delete this hall, because there is a screening in progress or is planned in the future."
                });
            }
        }
        await CinemaHalls.destroy({
            where: {
                hallID,
            }
        });

        return res.status(204).end();

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with delete cinema hall"
        });
    }
}