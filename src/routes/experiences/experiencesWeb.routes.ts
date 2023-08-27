import express from "express";
import experiencesController from "../../controllers/experiences.controllers";

const router = express.Router();

router.get('/:slug', experiencesController.getExperienceBySlug)

export default router;