import express from "express";
import multer from "multer";
import { getTrade, uploadTrades } from "../controllers/tradeController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), uploadTrades);
router.get("/", getTrade)

export default router;
