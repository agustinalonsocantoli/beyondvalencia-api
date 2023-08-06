import express from "express";
import { verifyToken } from "../middlewares/auth.jwt";

const router = express.Router();

router.get('/', [verifyToken], )

router.get('/:slug', [verifyToken], )

router.post('/', [verifyToken], )

router.put('/:slug', [verifyToken], )

router.delete('/:slug', [verifyToken], )

export default router;