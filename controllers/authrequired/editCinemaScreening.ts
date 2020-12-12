import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening } = database.models;

import { ScreeningDb } from '../../helpers/types';
import isScreeningExist from '../../helpers/isScreeningExist';


export default async (req: Request, res: Response) => {

    try {
        const { id, startTime, duration, filmTitle } = req.body

        const isExistStartTime: boolean = !(startTime === undefined);
        const isExistDuration: boolean = !(duration === undefined);
        const isExistFilmTitle: boolean = !(filmTitle === undefined);

        if (!isExistStartTime && !isExistDuration && !isExistFilmTitle) {
            return res.status(400).json({
                status: "failure",
                msg: "Give minumum one value to change in database."
            });
        }

        if (!await isScreeningExist(id)) {
            return res.status(404).json({
                status: "failure",
                msg: `Screening with id ${id} does not exist.`
            });
        }

        const newScreeningData: ScreeningDb = {};

        if (isExistStartTime) {
            const today: number = Date.parse(String(new Date()));
            const newStart: number = Date.parse(String(startTime));

            if (today > newStart) {
                return res.status(400).json({
                    status: "failure",
                    msg: "You can't edit the screening that already took place.",
                });
            }
            newScreeningData.startTime = newStart;
        }
        if (isExistDuration) newScreeningData.duration = duration;
        if (isExistFilmTitle) newScreeningData.filmTitle = filmTitle;

        console.log(newScreeningData);
        await CinemaScreening.update(newScreeningData, {
            where: {
                cinemaScreeningID: id,
            },
        });
        return res.status(204).end();

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with edit cinema screening",
        });
    }
}