import express from "express";
import lockersController from "../../controllers/lockers.controllers";

const router = express.Router();

router.get('/', lockersController.getAllLockers)

router.get('/:id', lockersController.getLocker)

export default router;