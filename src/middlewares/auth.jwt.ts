import jwt, { JsonWebTokenError, NotBeforeError, TokenExpiredError } from "jsonwebtoken";
import Users from "../models/users.models";
import dotenv from 'dotenv';
import { NextFunction } from "express";
dotenv.config()

const HASH_TOKEN = process.env.SECRET_KEY ? process.env.SECRET_KEY : "BEYOND-VALENCIA-TOKEN"

export const verifyToken = async (req: any, res: any, next: NextFunction) => {

    try {
        const token = req.headers["x-access-token"];

        if(!token) return res.json({ message: "Unauthorized" })

        jwt.verify(token, HASH_TOKEN, async (err: any, decoded: any) => {
            if (err instanceof TokenExpiredError) {
              return res.status(401).send({ success: false, message: 'Unauthorized, access Token was expired' });
            }
            if (err instanceof NotBeforeError) {
              return res.status(401).send({ success: false, message: 'jwt not active' });
            }
            if (err instanceof JsonWebTokenError) {
              return res.status(401).send({ success: false, message: 'jwt malformed' });
            }

            req.userId = decoded.id;
            const user = await Users.findById(req.userId, { password: 0 })
    
            if(!user) return res.json({ message: "No User found", data: null })

            next();
          });
    }  
    catch(error) {
        next(error);
        res.json({ 
            message: "Unauthorized"
        })
    }

};