import express from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import daytripsController from "../controllers/daytrips.controllers";

const router = express.Router();

router.get('/', [verifyToken], daytripsController.getAllDaytrips)

router.get('/:slug', [verifyToken], daytripsController.getDaytrip)

router.post('/', [verifyToken], daytripsController.newDaytrip)

router.put('/:slug', [verifyToken], daytripsController.updateDaytrip)

router.delete('/:slug', [verifyToken], daytripsController.deleteDaytrip)

export default router;