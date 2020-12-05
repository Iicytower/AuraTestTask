import { Router } from "express";

const router = Router();

import addCinemHallRouter from './addCinemaHall';

router.use("/addCinemaHall", addCinemHallRouter);

export default router;