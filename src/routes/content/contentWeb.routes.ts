import express from "express";
import contentController from "../../controllers/content.controllers";

const router = express.Router();

router.get('/', contentController.getAllContent)

export default router;