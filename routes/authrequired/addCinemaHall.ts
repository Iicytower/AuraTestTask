import { Router } from "express";

const router = Router();

import addCinemaHall from '../../controllers/authrequired/addCinemaHall';

router.post("/", addCinemaHall);

export default router;