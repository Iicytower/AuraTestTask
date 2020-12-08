import { Router } from "express";
import bodyParser from 'body-parser';
import validator from "../../middlewares/validator";
import { check } from "express-validator";

const router = Router();

import addCinemaScreening from '../../controllers/authrequired/addCinemaScreening';

router.post("/",
    bodyParser.json(),
    [
        check("hallID").isString(),
        check("startTime").isString(),
        check("duration").isInt(),
        check("filmTitle").isString(),
    ],
    validator(),
    addCinemaScreening);

export default router;