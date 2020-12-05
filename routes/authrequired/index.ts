import { Router } from "express";

const router = Router();

import addCinemHallRouter from './addCinemaHall';
import editCinemHallRouter from './editCinemaHall';

router.use("/addCinemaHall", addCinemHallRouter);
router.use("/editCinemaHall", editCinemHallRouter);

export default router;