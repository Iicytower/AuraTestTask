import { Router } from "express";
import bodyParser from 'body-parser';
import validator from "../../middlewares/validator";
import { check } from "express-validator";

const router = Router();

import listCinemaScreening from '../../controllers/authrequired/listCinemaScreening';

router.get("/",
    bodyParser.json(),
    [
        check("hallID").isString(),
    ],
    validator(),
    listCinemaScreening);

export default router;