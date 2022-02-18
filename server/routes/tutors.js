//This file will handle all the routes that were exported from the controllers folder

import express from "express";
import { getTutors, createTutor, updateTutor } from "../controllers/tutors.js";

const router = express.Router();

router.get("/", getTutors);
router.post("/", createTutor);
router.patch("/:id", updateTutor);

export default router;
