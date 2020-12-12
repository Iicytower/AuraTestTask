import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening, CinemaHalls } = database.models;
import allScreeningInHall from '../../helpers/allScreeningInHall'
import isHallExist from '../../helpers/isHallExist';
import { ScreeningDb } from '../../helpers/types'

export default async (req: Request, res: Response) => {

    const { hallID } = req.body;

    try {
        if (!await isHallExist(hallID)) {
            return res.status(404).json({
                status: `failure`,
                msg: `Hall with id ${hallID} is not exist in database.`,
            });
        }

        const data: ScreeningDb[] = await allScreeningInHall(hallID);
        

        return res.status(200).json({
            status: 'success',
            msg: `Cinema screening list in ${hallID} hall`,
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