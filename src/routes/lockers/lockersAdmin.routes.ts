import express from "express";
import { isAdmin, verifyToken } from "../../middlewares/auth.jwt";
import lockersController from "../../controllers/lockers.controllers";

const router = express.Router();

router.get('/', [verifyToken, isAdmin], lockersController.getAllLockers)

router.get('/:id', [verifyToken, isAdmin], lockersController.getLocker)

router.post('/', [verifyToken, isAdmin], lockersController.newLocker)

router.put('/:id', [verifyToken, isAdmin], lockersController.updateLocker)

router.delete('/:id', [verifyToken, isAdmin], lockersController.deleteLocker)

export default router;