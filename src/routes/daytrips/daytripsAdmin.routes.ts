import express from "express";
import { isAdmin, verifyToken } from "../../middlewares/auth.jwt";
import daytripsController from "../../controllers/daytrips.controllers";

const router = express.Router();

router.get('/', [verifyToken], daytripsController.getAllDaytrips)

router.get('/:id', [verifyToken], daytripsController.getDaytripById)

router.post('/', [verifyToken, isAdmin], daytripsController.newDaytrip)

router.put('/:id', [verifyToken, isAdmin], daytripsController.updateDaytrip)

router.delete('/:id', [verifyToken, isAdmin], daytripsController.deleteDaytrip)

export default router;