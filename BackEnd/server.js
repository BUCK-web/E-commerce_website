import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Connection from './config/dbConfig.js';
import FoodRouter from './Routes/FoodRoutes.js';
import UserRouter from './Routes/UserRoutes.js';
import cookieParser from 'cookie-parser';
import CartRouter from './Routes/CartRoute.js';
import { configDotenv } from 'dotenv';
import OrderRouter from './Routes/orderRoute.js';
import adminRouter from './Routes/AdminRoute.js';
configDotenv();


// Middleware
const app = express();
app.use(cors({ credentials: true, origin: ["http://localhost:5173", "http://localhost:5174"]}));
app.use(cookieParser());
app.use(express.json());


// Connect to MongoDB
Connection();

// Api EndPoint
app.use("/api/food",FoodRouter)
app.use("/api/user",UserRouter)
app.use("/api/cart",CartRouter)
app.use("/images",express.static('uploads'));
app.use("/api/payment",OrderRouter)
app.use("/api/admin",adminRouter)



app.get("/",(req,res)=>{
    res.json({Data:"The server is established"})
})

app.listen("5000",()=>{
    console.log("Server is running on port http://localhost:5000")
})