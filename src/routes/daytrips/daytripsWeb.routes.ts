import express from "express";
import daytripsController from "../../controllers/daytrips.controllers";

const router = express.Router();

router.get('/', daytripsController.getAllDaytrips)

router.get('/:slug', daytripsController.getDaytripBySlug)

export default router;