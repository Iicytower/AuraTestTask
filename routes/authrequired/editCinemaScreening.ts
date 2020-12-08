import { Router } from "express";
import bodyParser from 'body-parser';
import validator from "../../middlewares/validator";
import { check } from "express-validator";

const router = Router();

import editCinemaScreening from '../../controllers/authrequired/editCinemaScreening';

router.put("/",
    bodyParser.json(),
    [
        check("id").isString(),
        check("startTime").isString().optional(),
        check("duration").isInt().optional(),
        check("filmTitle").isString().optional(),
    ],
    validator(),
    editCinemaScreening);

export default router;