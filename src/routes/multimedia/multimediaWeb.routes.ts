import express from "express";
import multimediaController from "../../controllers/multimedia.controllers";

const router = express.Router();

router.get('/', multimediaController.getAllMultimedia)

router.get('/:id', multimediaController.getMultimedia)


export default router;