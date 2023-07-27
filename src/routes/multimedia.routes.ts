import express from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import multimediaController from "../controllers/multimedia.controllers";

const router = express.Router();

router.get('/', [verifyToken], multimediaController.getAllMultimedia)

router.get('/:slug', [verifyToken], multimediaController.getMultimedia)

router.post('/', [verifyToken], multimediaController.newMultimedia)

router.put('/:slug', [verifyToken], multimediaController.updateMultimedia)

router.delete('/:slug', [verifyToken], multimediaController.deleteMultimedia)

export default router;