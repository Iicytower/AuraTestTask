import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening } = database.models;

import { Screening } from '../../helpers/types';


const editCinemaScreening = async (req: Request, res: Response) => {

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
        const isExist = await CinemaScreening.findOne({
            where: {
                cinemaScreeningID: id,
            }
        });

        if (!isExist) {
            return res.status(404).json({
                status: "failure",
                msg: `Screening with id ${id} does not exist.`
            });
        }

        const newScreeningData: Screening = {};

        if (isExistStartTime) newScreeningData.startTime = startTime;
        if (isExistDuration) newScreeningData.duration = duration;
        if (isExistFilmTitle) newScreeningData.filmTitle = filmTitle;

        await CinemaScreening.update(newScreeningData, {
            where: {
                cinemaScreeningID: id,
            },
        });

        return res.status(204);

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with edit cinema screening",
        });
    }


}

export default editCinemaScreening;