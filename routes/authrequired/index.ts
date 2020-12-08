import { Router } from "express";

const router = Router();

import addCinemHallRouter from './addCinemaHall';
import editCinemHallRouter from './editCinemaHall';
import addCinemaScreeningRouter from './addCinemaScreening';
import editCinemaScreeningRouter from './editCinemaScreening';

router.use("/addCinemaHall", addCinemHallRouter);
router.use("/editCinemaHall", editCinemHallRouter);
router.use("/addCinemaScreening", addCinemaScreeningRouter);
router.use("/editCinemaScreening", editCinemaScreeningRouter);

export default router;