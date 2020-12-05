import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaHalls } = database.models;

const addCinemaHall = async (req: Request, res: Response) => {


    try {
        const hall = req.body

        const isExist = await CinemaHalls.findOne({
            where: {
                name: hall.name,
            }
        })
        if(!!isExist){
            return res.status(200).json({
                status: `failure`,
                mgs: `There is a a hall with name ${hall.name}`
            })
        }

        await CinemaHalls.create(hall)

        return res.status(200).json({
            status: `succes`,
            msg: `success add newhall with name ${hall.name}.`,
          });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with add cinema hall"
        });
    }
}

export default addCinemaHall;