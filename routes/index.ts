import { Router } from 'express';

const router = Router();

import registerRouter from './register';
import loginRouter from './login';
import authrequired from './authrequired/index';

router.use("/register", registerRouter);
router.use("/login", loginRouter);

router.use("/authrequired", 
// (req, res, next) => (req.isAuthenticated()) ? next() : res.send('failed to auth'),
authrequired);

export default router;