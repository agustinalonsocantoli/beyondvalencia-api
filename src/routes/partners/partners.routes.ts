import express from "express";
import { verifyToken } from "../../middlewares/auth.jwt";
import partnersController from "../../controllers/partners.controllers";

const router = express.Router();

router.get('/', [verifyToken], partnersController.getAllPartners)

router.get('/:id', [verifyToken], partnersController.getPartner)

router.post('/', [verifyToken], partnersController.newPartner)

router.put('/:id', [verifyToken], partnersController.updatePartner)

router.delete('/:id', [verifyToken], partnersController.deletePartner)

export default router;