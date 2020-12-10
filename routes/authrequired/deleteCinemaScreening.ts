import { Router } from "express";
import bodyParser from 'body-parser';
import validator from "../../middlewares/validator";
import { check } from "express-validator";

const router = Router();

import deleteCinemaScreening from '../../controllers/authrequired/deleteCinemaScreening';

router.delete("/",
    bodyParser.json(),
    [
        check("cinemaScreeningID").isString(),
    ],
    validator(),
    deleteCinemaScreening);

export default router;