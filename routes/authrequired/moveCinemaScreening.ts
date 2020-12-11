import { Router } from "express";
import bodyParser from 'body-parser';
import validator from "../../middlewares/validator";
import { check } from "express-validator";

const router = Router();

import moveCinemaScreening from '../../controllers/authrequired/moveCinemaScreening';

router.put("/",
    bodyParser.json(),
    [
        check("newHallID").isString(),
        check("screeningID").isString(),
    ],
    validator(),
    moveCinemaScreening);

export default router;