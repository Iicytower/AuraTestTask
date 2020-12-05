import { Router } from "express";

const router = Router();

import editCinemaHall from '../../controllers/authrequired/editCinemaHall';

router.put("/", editCinemaHall);

export default router;