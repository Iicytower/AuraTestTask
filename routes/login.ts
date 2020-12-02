import { Router } from "express";
import bodyParser from 'body-parser';
import validator from "../middlewares/validator";
import { check } from "express-validator";

import loginController from "../controllers/login";

const router = Router();

router.post("/",
    bodyParser.json(),
    [
        check("email").isEmail(),
        check("password").isString()
    ],
    validator(),
    loginController);

export default router;