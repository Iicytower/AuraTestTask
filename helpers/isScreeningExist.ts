import database from "../database/database";
const { CinemaScreening } = database.models;

export default async (screeningID: string) => {
    let isExist;
 try {

     isExist = await CinemaScreening.findOne({
         where: {
            cinemaScreeningID: screeningID,
         }
     });
     
 } catch (err) {
    console.error(err);
 }

    return !!isExist;
}