import express from "express";
import codesController from "../../controllers/codes.controllers";

const router = express.Router();

router.get('/', codesController.getAllCodes)

export default router;