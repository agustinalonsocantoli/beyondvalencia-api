import express from "express";
import eventsController from "../../controllers/events.controllers";

const router = express.Router();

router.get('/', eventsController.getAllEvents )

router.get('/:slug', eventsController.getEventBySlug )

export default router;