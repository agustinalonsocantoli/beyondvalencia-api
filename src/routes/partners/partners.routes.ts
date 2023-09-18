import express from "express";
import { isAdmin, verifyToken } from "../../middlewares/auth.jwt";
import partnersController from "../../controllers/partners.controllers";

const router = express.Router();

router.get('/', [verifyToken, isAdmin], partnersController.getAllPartners)

router.get('/:id', [verifyToken, isAdmin], partnersController.getPartner)

router.post('/', [verifyToken, isAdmin], partnersController.newPartner)

router.put('/:id', [verifyToken, isAdmin], partnersController.updatePartner)

router.delete('/:id', [verifyToken, isAdmin], partnersController.deletePartner)

export default router;