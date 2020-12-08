import { Request, Response } from 'express';
import { Op } from 'sequelize';
import database from "../../database/database";
const { CinemaHalls } = database.models;


import { Hall } from '../../helpers/types';

const editCinemaHall = async (req: Request, res: Response) => {

    try {
        const { id, name, capacity } = req.body;

        const isExistName = !(name === undefined)
        const isExistCapacity = !(capacity === undefined)

        if (!isExistName && !isExistCapacity) {
            return res.status(400).json({
                status: "failure",
                msg: "Give minumum one value to change in database."
            });
        }

        const isExist = await CinemaHalls.findOne({
            where: {
                hallID: id,
            }
        });

        if (!isExist) {
            return res.status(404).json({
                status: "failure",
                msg: `Hall with id ${id} does not exist.`
            });
        }

        const isExistNameInDb = await CinemaHalls.findOne({
            where: {
                name,
            }
        });
        if(!!isExistNameInDb){
            return res.status(400).json({
                status: `failure`,
                mgs: `There is a a hall with name ${name}`
            })
        }

        const newHallData: Hall = {};

        if (isExistName) newHallData.name = name;
        if (isExistCapacity) newHallData.capacity = capacity;

        await CinemaHalls.update(newHallData, {
            where: {
                hallID: id,
            },
        });

        return res.status(204);

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with edit cinema hall"
        });
    }

}

export default editCinemaHall;