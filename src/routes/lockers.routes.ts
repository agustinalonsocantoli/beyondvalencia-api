import express from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import lockersController from "../controllers/lockers.controllers";

const router = express.Router();

router.get('/', [verifyToken], lockersController.getAllLockers)

router.get('/:id', [verifyToken], lockersController.getLocker)

router.post('/', [verifyToken], lockersController.newLocker)

router.put('/:id', [verifyToken], lockersController.updateLocker)

router.delete('/:id', [verifyToken], lockersController.deleteLocker)

export default router;