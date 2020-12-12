import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening } = database.models;

import isScreeningExist from '../../helpers/isScreeningExist';

export default async (req: Request, res: Response) => {

    try {
        const { cinemaScreeningID } = req.body;

        if (!await isScreeningExist(cinemaScreeningID)) {
            return res.status(404).json({
                status: "failure",
                msg: "There is no screening with the given id",
            });
        }
        CinemaScreening.destroy({
            where: {
                cinemaScreeningID,
            }
        });
        return res.status(202).json({
            status: "success",
            msg: "resource was marked for deletion",
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with delete cinema screening."
        });
    }



    return res.end('dupa');

}