import express from "express";
import { verifyToken } from "../../middlewares/auth.jwt";
import daytripsController from "../../controllers/daytrips.controllers";

const router = express.Router();

router.get('/', daytripsController.getAllDaytrips)

router.get('/:id', [verifyToken], daytripsController.getDaytripById)

router.post('/', [verifyToken], daytripsController.newDaytrip)

router.put('/:id', [verifyToken], daytripsController.updateDaytrip)

router.delete('/:id', [verifyToken], daytripsController.deleteDaytrip)

export default router;