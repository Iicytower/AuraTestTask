import { Router } from "express";
import bodyParser from 'body-parser';
import validator from "../../middlewares/validator";
import { check } from "express-validator";

const router = Router();

import deleteCinemaHall from '../../controllers/authrequired/deleteCinemaHall';

router.delete("/",
    bodyParser.json(),
    [
        check("hallID").isString(),
    ],
    validator(),
    deleteCinemaHall);

export default router;