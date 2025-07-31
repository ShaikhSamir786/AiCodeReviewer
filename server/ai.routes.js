import express from "express";
import { getresponse } from "./ai.controller.js";

const router = express.Router();

router.get("/generate", getresponse);
router.post("/generate", getresponse);

export default router;
