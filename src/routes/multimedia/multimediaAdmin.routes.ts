import express from "express";
import { verifyToken } from "../../middlewares/auth.jwt";
import multimediaController from "../../controllers/multimedia.controllers";

const router = express.Router();

router.get('/', [verifyToken], multimediaController.getAllMultimedia)

router.get('/:id', [verifyToken], multimediaController.getMultimedia)

router.put('/:id', [verifyToken], multimediaController.updateMultimedia)

export default router;