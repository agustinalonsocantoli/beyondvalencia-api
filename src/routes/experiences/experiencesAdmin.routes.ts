import express from "express";
import { verifyToken } from "../../middlewares/auth.jwt";
import experiencesController from "../../controllers/experiences.controllers";

const router = express.Router();

router.get('/', [verifyToken], experiencesController.getAllExperiences)

router.get('/:id', [verifyToken],experiencesController.getExperienceById)

router.post('/', [verifyToken], experiencesController.newExperience)

router.put('/:id', [verifyToken], experiencesController.updateExperience)

router.delete('/:id', [verifyToken], experiencesController.deleteExperience)

export default router;