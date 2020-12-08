import database from "../database/database";
const { CinemaScreening } = database.models;

export default async(hallID: string) =>{
    try {
        const screeningList = await CinemaScreening.findAll({
            where:{
                CinemaHallHallID: hallID,
            }
        });
        return screeningList;
    } catch (err) {
        return err;
    }
}