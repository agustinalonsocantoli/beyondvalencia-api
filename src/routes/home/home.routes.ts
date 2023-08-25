import express from "express";

const router = express.Router();

router.get('/', (_req, res, next) => {
    try {
        res.json({
            message: 'Welcome to BeyondValencia',
            author: 'Agustin Alonso Cantoli',
        });

    } catch(error) {
        next();
        res.json({
            messages: 'Error en el Servidor',
            error: error
        });
    }
})

export default router;