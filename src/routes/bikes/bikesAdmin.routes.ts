import express from "express";
import { isAdmin, verifyToken } from "../../middlewares/auth.jwt";
import bikesController from "../../controllers/bikes.controllers";

const router = express.Router();

router.get('/', [verifyToken, isAdmin], bikesController.getAllBikes)

router.get('/:id', [verifyToken, isAdmin], bikesController.getBike)

router.post('/', [verifyToken, isAdmin], bikesController.newBike)

router.put('/:id', [verifyToken, isAdmin], bikesController.updateBike)

router.delete('/:id', [verifyToken, isAdmin], bikesController.deleteBike)

export default router;