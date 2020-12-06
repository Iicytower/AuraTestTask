import { Router } from "express";

const router = Router();

import addCinemaScreening from '../../controllers/authrequired/addCinemaScreening';

router.post("/", addCinemaScreening);

export default router;