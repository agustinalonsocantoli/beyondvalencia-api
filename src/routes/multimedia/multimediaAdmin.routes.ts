import express from "express";
import { isAdmin, verifyToken } from "../../middlewares/auth.jwt";
import multimediaController from "../../controllers/multimedia.controllers";

const router = express.Router();

router.get('/', [verifyToken, isAdmin], multimediaController.getAllMultimedia)

router.get('/:id', [verifyToken, isAdmin], multimediaController.getMultimedia)

router.put('/:id', [verifyToken, isAdmin], multimediaController.updateMultimedia)

export default router;