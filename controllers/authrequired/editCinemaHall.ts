import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaHalls } = database.models;

const editCinemaHall = async (req: Request, res: Response) => {

    try {

        const hall = req.body

        if (hall.name === undefined && hall.capacity === undefined) {
            return res.status(200).json({
                status: "failure",
                msg: "Give minumum one value to change in database."
            });
        }

        const isExist = await CinemaHalls.findOne({
            where: {
                hallID: hall.id,
            }
        });

        if (!isExist) {
            return res.status(200).json({
                status: "failure",
                msg: `hall with id ${hall.id} does not exist.`
            });
        }
        if (hall.name !== undefined && hall.capacity !== undefined) {
            const { name, capacity } = hall;
            await CinemaHalls.update(
                {
                    name,
                    capacity,
                },
                {
                    where: {
                        hallID: hall.id,
                    },
                },
            );
            return res.status(204).json({
                status: "success",
                msg: "Successfully update cinema hall",
            });
        }
        if (hall.name !== undefined) {
            const { name } = hall;
            await CinemaHalls.update(
                {
                    name,
                },
                {
                    where: {
                        hallID: hall.id,
                    },
                },
            );
            return res.status(204).json({
                status: "success",
                msg: "Successfully update cinema hall",
            });
        }
        if (hall.capacity !== undefined) {
            const { capacity } = hall;
            await CinemaHalls.update(
                {
                    capacity,
                },
                {
                    where: {
                        hallID: hall.id,
                    },
                },
            );
            return res.status(204).json({
                status: "success",
                msg: "Successfully update cinema hall",
            });
        }

        return res.json('dupa')

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with edit cinema hall"
        });
    }

}

export default editCinemaHall;