import express from "express";
import { isAdmin, verifyToken } from "../../middlewares/auth.jwt";
import eventsController from "../../controllers/events.controllers";

const router = express.Router();

router.get('/', [verifyToken], [verifyToken], eventsController.getAllEvents)

router.get('/:id', [verifyToken], eventsController.getEventById)

router.post('/', [verifyToken], eventsController.newEvent)

router.put('/:id', [verifyToken, isAdmin], eventsController.updateEvent)

router.delete('/:id', [verifyToken, isAdmin], eventsController.deleteEvent)

export default router;