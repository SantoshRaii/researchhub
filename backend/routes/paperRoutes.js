import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  addPaper,
  getPapers,
  updatePaper,
  deletePaper
} from "../controllers/paperController.js";

const router = express.Router();

router.post("/", protect, addPaper);
router.get("/", protect, getPapers);
router.put("/:id", protect, updatePaper);
router.delete("/:id", protect, deletePaper);

export default router;
