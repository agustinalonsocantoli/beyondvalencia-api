import express from "express";
import { verifyToken } from "../../middlewares/auth.jwt";
import eventsController from "../../controllers/events.controllers";

const router = express.Router();

router.get('/', eventsController.getAllEvents)

router.get('/:id', [verifyToken], eventsController.getEventById)

router.post('/', [verifyToken], eventsController.newEvent)

router.put('/:id', [verifyToken], eventsController.updateEvent)

router.delete('/:id', [verifyToken], eventsController.deleteEvent)

export default router;