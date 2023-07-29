import express from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import contentController from "../controllers/content.controllers";

const router = express.Router();

router.get('/', [verifyToken], contentController.getAllContent)

router.get('/:id', [verifyToken], contentController.getContent)

router.put('/:id', [verifyToken], contentController.updateContent)

export default router;