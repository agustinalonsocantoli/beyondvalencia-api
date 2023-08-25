import express from "express";
import contentController from "../../controllers/content.controllers";

const router = express.Router();

router.get('/', contentController.getAllContent)

router.get('/:id', contentController.getContent)

export default router;