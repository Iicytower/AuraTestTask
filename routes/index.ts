import { Router } from "express";
import homePage from '../controllers/home';

const router = Router();

router.get("/", homePage);

export default router;