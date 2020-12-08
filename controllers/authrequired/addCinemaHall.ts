import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaHalls } = database.models;

const addCinemaHall = async (req: Request, res: Response) => {


    try {
        const {capacity, name} = req.body

        const isExist = await CinemaHalls.findOne({
            where: {
                name: name,
            }
        });
        if(!!isExist){
            return res.status(200).json({
                status: `failure`,
                mgs: `There is a a hall with name ${name}`
            })
        }

        await CinemaHalls.create({capacity, name})

        return res.status(201).json({
            status: `succes`,
            msg: `success to add new hall with name ${name}.`,
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