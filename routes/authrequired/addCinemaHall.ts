import { Router } from "express";
import bodyParser from 'body-parser';
import validator from "../../middlewares/validator";
import { check } from "express-validator";

const router = Router();

import addCinemaHall from '../../controllers/authrequired/addCinemaHall';

router.post("/",
    bodyParser.json(),
    [
        check("name").isString(),
        check("capacity").isInt(),
    ],
    validator(),
    addCinemaHall);

export default router;