import { Router } from "express";
import bodyParser from 'body-parser';
import validator from "../../middlewares/validator";
import { check } from "express-validator";

const router = Router();

import editCinemaHall from '../../controllers/authrequired/editCinemaHall';

router.put("/",
    bodyParser.json(),
    [
        check("id").isString(),
        check("name").isString().optional(),
        check("capacity").isInt().optional(),
    ],
    validator(),
    editCinemaHall);

export default router;