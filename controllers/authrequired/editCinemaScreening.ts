import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening } = database.models;

const editCinemaScreening = async (req: Request, res: Response) => {

    try {
        const { id, startTime, duration, filmTitle } = req.body

        const isExistStartTime: boolean = !(startTime === undefined);
        const isExistDuration: boolean = !(duration === undefined);
        const isExistFilmTitle: boolean = !(filmTitle === undefined);

        if (!isExistStartTime && !isExistDuration && !isExistFilmTitle) {
            return res.status(200).json({
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
            return res.status(200).json({
                status: "failure",
                msg: `Screening with id ${id} does not exist.`
            });
        }

        type UpdateScreening = {
            startTime?: string,
            duration?: number,
            filmTitle?: string,
        };

        const newScreeningData: UpdateScreening = {};

        if (isExistStartTime) newScreeningData.startTime = startTime;
        if (isExistDuration) newScreeningData.duration = duration;
        if (isExistFilmTitle) newScreeningData.filmTitle = filmTitle;

        await CinemaScreening.update(newScreeningData, {
            where: {
                cinemaScreeningID: id,
            },
        });

        return res.status(200).json({
            status: `success`,
            msg: "Successfully update cinema screening",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with edit cinema screening",
        });
    }


}

export default editCinemaScreening;