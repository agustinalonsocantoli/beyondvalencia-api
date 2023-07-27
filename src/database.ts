import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.MONGODB_URL === undefined ? '' : process.env.MONGODB_URL;

try {
    mongoose.connect(url).then(() => {
        console.log("Database is connected");
    })
    
} catch (error: any) {
    console.error(error.message);
}
