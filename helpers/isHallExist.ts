import database from "../database/database";
const { CinemaHalls } = database.models;

export default async (hallID: string) => {
    let isExist;
 try {

     isExist = await CinemaHalls.findOne({
         where: {
             hallID,
         }
     });
     
 } catch (err) {
    console.error(err);
    return err
 }

    return !!isExist;
}