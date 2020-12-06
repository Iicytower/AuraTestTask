import { Router } from "express";

const router = Router();

import addCinemHallRouter from './addCinemaHall';
import editCinemHallRouter from './editCinemaHall';
import addCinemaScreeningRouter from './addCinemaScreening';

router.use("/addCinemaHall", addCinemHallRouter);
router.use("/editCinemaHall", editCinemHallRouter);
router.use("/addCinemaScreening", addCinemaScreeningRouter);

export default router;