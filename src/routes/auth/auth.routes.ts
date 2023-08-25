import express from "express";
import authController from "../../controllers/auth.controllers";

const router = express.Router();

router.post("/login", authController.login)
router.post("/singup", authController.signup)

export default router;