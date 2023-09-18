import express from "express";
import { isAdmin, verifyToken } from "../../middlewares/auth.jwt";
import contentController from "../../controllers/content.controllers";

const router = express.Router();

router.get('/', [verifyToken, isAdmin], contentController.getAllContent)

router.get('/:id', [verifyToken, isAdmin], contentController.getContent)

router.put('/:id', [verifyToken, isAdmin], contentController.updateContent)

export default router;