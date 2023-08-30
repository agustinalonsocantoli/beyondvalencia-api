import express, { Request, Response } from "express";
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config()
const stripe = new Stripe(process.env.PRIVATE_KEY || "", {
    apiVersion: '2023-08-16',
});

const router = express.Router();

router.post("/api/checkout", async (req: Request, res: Response) => {
    try{
    const { amount, description } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "eur",
        description,
        automatic_payment_methods: {
        enabled: true,
        },
    });
    
    res.send({
        clientSecret: paymentIntent.client_secret,
        id: paymentIntent.id,
    });
    } catch(error: any) {
    res.json({
        message: error.raw.message
    });
    }
});
  
router.post("/api/cancel", async (req: Request, res: Response) => {
try{
    const { id } = req.body;

    // Cancel a PaymentIntent 
    const paymentIntent = await stripe.paymentIntents.cancel(id);
    
    res.send({
    status: paymentIntent.status,
    });
}
catch(error: any) {
    res.json({
    message: error.raw
    });
}
});

export default router;