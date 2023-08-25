import express from "express";
import bikesController from "../../controllers/bikes.controllers";

const router = express.Router();

router.get('/', bikesController.getAllBikes)

router.get('/:id', bikesController.getBike)

export default router;