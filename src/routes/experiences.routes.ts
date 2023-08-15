import express from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import experiencesController from "../controllers/experiences.controllers";

const router = express.Router();

router.get('/', experiencesController.getAllExperiences)

router.get('/:slug', experiencesController.getExperience)

router.post('/', [verifyToken], experiencesController.newExperience)

router.put('/:slug', [verifyToken], experiencesController.updateExperience)

router.delete('/:slug', [verifyToken], experiencesController.deleteExperience)

export default router;