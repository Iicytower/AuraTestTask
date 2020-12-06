import { Request, Response } from 'express';
import database from "../../database/database";
const { CinemaScreening, CinemaHalls } = database.models;

const addCinemaScreening = async (req: Request, res: Response) => {

    //check whether the screening is taking place in the given hours

    try {
        const { hallID, startTime, duration, filmTitle } = req.body;

        const foundCinemaHall = await CinemaHalls.findOne({
            where: {
                hallID, 
            }
        });

        if(!!foundCinemaHall){

            // const addCinemaScreening = await foundCinemaHall.createCinemaScreening({
            //         startTime, 
            //         duration, 
            //         filmTitle,
            // },{

            // });


            return res.json("success");
        }

        return res.end("fail");

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: `failure`,
            msg: "somthing goes wrong with add cinema screening"
        });
    }

    //if yes return info



    //if no add cinema screening and return info



    return res.send('addCinemaScreening');
}

export default addCinemaScreening;