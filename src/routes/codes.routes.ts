import express from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import codesController from "../controllers/codes.controllers";

const router = express.Router();

router.get('/', [verifyToken], codesController.getAllCodes)

router.get('/:id', [verifyToken], codesController.getCode)

router.post('/', [verifyToken], codesController.newCode)

router.put('/:id', [verifyToken], codesController.updateCode)

router.delete('/:id', [verifyToken], codesController.deleteCode)

export default router;