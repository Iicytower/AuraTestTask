import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening } = database.models;

import isHallExistReq from '../../helpers/isHallExist';
import isScreeningExistReq from '../../helpers/isScreeningExist';

export default async (req: Request, res: Response) => {

    const { newHallID, screeningID } = req.body;

    try {

        const isHallExist = await isHallExistReq(newHallID);
        if (!isHallExist) {
            return res.status(404).json({
                status: `failure`,
                msg: `hall with id ${newHallID} does not exist`
            })
        }

        const isScreeningExist = await isScreeningExistReq(screeningID);
        if (!isScreeningExist) {
            return res.status(404).json({
                status: `failure`,
                msg: `Screening with id ${screeningID} does not exist`
            })
        }

        await CinemaScreening.update({
            CinemaHallHallID: newHallID,
        }, {
            where: {
                cinemaScreeningID: screeningID,
            },
        });
        
        return res.status(204).end();

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with move cinema screening"
        });
    }
}