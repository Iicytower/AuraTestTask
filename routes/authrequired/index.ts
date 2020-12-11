import { Router } from "express";

const router = Router();

import addCinemHallRouter from './addCinemaHall';
import editCinemHallRouter from './editCinemaHall';
import addCinemaScreeningRouter from './addCinemaScreening';
import editCinemaScreeningRouter from './editCinemaScreening';
import deleteCinemaScreeningRouter from './deleteCinemaScreening';
import listCinemaScreeningRouter from './listCinemaScreening';
import moveCinemaScreeningRouter from './moveCinemaScreening';

router.use("/addCinemaHall", addCinemHallRouter);
router.use("/editCinemaHall", editCinemHallRouter);
router.use("/addCinemaScreening", addCinemaScreeningRouter);
router.use("/editCinemaScreening", editCinemaScreeningRouter);
router.use("/deleteCinemaScreening", deleteCinemaScreeningRouter);
router.use("/listCinemaScreening", listCinemaScreeningRouter);
router.use("/moveCinemaScreening", moveCinemaScreeningRouter);

export default router;