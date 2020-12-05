import { Router } from "express";

const router = Router();

import testPage from '../../controllers/authrequired/test';

router.use("/test", testPage);

export default router;