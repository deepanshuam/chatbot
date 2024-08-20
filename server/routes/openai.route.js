import { Router } from "express";
import chatbotController from "../controller/openai.controller.js";

const router = Router();

router.post("/faq", chatbotController);

export default router; // Make sure this matches the import name in index.js
