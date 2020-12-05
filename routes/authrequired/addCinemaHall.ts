import { Router } from "express";

const router = Router();

import addCinemaHall from '../../controllers/authrequired/addCinemaHall';

router.get("/", addCinemaHall);

export default router;