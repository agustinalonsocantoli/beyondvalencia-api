import express from "express";
import { isAdmin, verifyToken } from "../../middlewares/auth.jwt";
import codesController from "../../controllers/codes.controllers";

const router = express.Router();

router.get('/', [verifyToken, isAdmin], codesController.getAllCodes)

router.get('/:id', [verifyToken, isAdmin], codesController.getCode)

router.post('/', [verifyToken, isAdmin], codesController.newCode)

router.put('/:id', [verifyToken, isAdmin], codesController.updateCode)

router.delete('/:id', [verifyToken, isAdmin], codesController.deleteCode)

export default router;