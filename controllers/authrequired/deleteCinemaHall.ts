import { Request, Response } from 'express';
import { Op } from 'sequelize';
import database from "../../database/database";
const { CinemaHalls, CinemaScreening } = database.models;
import isHallExist from '../../helpers/isHallExist';

const deleteCinemaHall = async (req: Request, res: Response) => {
    //1607695747000
    const { hallID } = req.body;

    try {

        const isExist = await isHallExist(hallID);
        if (!isExist) {
            return res.status(404).json({
                status: `failure`,
                msg: `Hall with ID ${hallID} does not exist.`
            })
        }


        const today: number = Date.parse(String(new Date()));
        const oneDay = 24 * 60 * 60 * 1000;

        const screenings = await CinemaScreening.findAll({
            where: {
                CinemaHallHallID: hallID,
                startTime: { [Op.gt]: today - oneDay }
            }
        });

        for (let i = 0; i < screenings.length; i++) {
            const el = screenings[i];

            const startTime = el.getDataValue('startTime');
            const duration = el.getDataValue('duration') * 60 * 1000;

            if (startTime + duration > today) {
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


    res.end('deleteCinemaHall');

}

export default deleteCinemaHall;