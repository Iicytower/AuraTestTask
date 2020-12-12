import database from "../database/database";
const { CinemaScreening } = database.models;

export default async (screeningID: string) => {
 try {

     const isExist = await CinemaScreening.findOne({
         where: {
            cinemaScreeningID: screeningID,
         }
     });
     
     
     return !!isExist;
 } catch (err) {
    console.error(err);
    return err
 }

}