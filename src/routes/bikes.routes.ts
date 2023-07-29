import express from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import bikesController from "../controllers/bikes.controllers";

const router = express.Router();

router.get('/', [verifyToken], bikesController.getAllBikes)

router.get('/:id', [verifyToken], bikesController.getBike)

router.post('/', [verifyToken], bikesController.newBike)

router.put('/:id', [verifyToken], bikesController.updateBike)

router.delete('/:id', [verifyToken], bikesController.deleteBike)

export default router;