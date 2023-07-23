"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (_req, res, next) => {
    try {
        res.json({
            message: 'Welcome to BeyondValencia',
            author: 'Agustin Alonso Cantoli',
        });
    }
    catch (error) {
        next();
        res.json({
            messages: 'Error en el Servidor',
            error: error
        });
    }
});
exports.default = router;
