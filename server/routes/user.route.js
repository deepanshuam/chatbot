import { Router } from "express";
const router = Router();
import {
  welcomeMessage,
  serviceInquiry,
  actionSelection,
} from "../controller/user.controller.js";

router.post("/welcome", welcomeMessage);
router.post("/service", serviceInquiry);
router.post("/action", actionSelection);

export default router;
