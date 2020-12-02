import { Router } from 'express';
import homePage from '../controllers/home';

const router = Router();

router.get("/", homePage);

import registerRouter from './register';
import loginRouter from './login';

router.use("/register", registerRouter);
router.use("/login", loginRouter);

export default router;