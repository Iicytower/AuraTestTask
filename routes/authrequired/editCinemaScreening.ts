import { Router } from "express";

const router = Router();

import editCinemaScreening from '../../controllers/authrequired/editCinemaScreening';

router.put("/", editCinemaScreening);

export default router;