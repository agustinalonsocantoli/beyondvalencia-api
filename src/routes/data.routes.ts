import express from "express";
import { verifyToken } from "../middlewares/auth.jwt";
import dataController from "../controllers/data.controllers";

const router = express.Router();

router.get('/', [verifyToken], dataController.getAllData)

router.get('/:slug', [verifyToken], dataController.getData)

router.post('/', [verifyToken], dataController.newData)

router.put('/:slug', [verifyToken], dataController.updateData)

router.delete('/:slug', [verifyToken], dataController.deleteData)

export default router;