import express from 'express';
import connectDatabase from './config/connectDatabase.js';
import dotenv from 'dotenv';
import authRoute from './routes/authRoutes.js'

import cors from 'cors';

dotenv.config();

const app = express();

connectDatabase()
app.use(cors({

    origin: "http://localhost:5173",
  credentials: true,   
}));
app.use(express.json());

app.use('/api/auth',authRoute);


app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message=err.message || "internal server error";
    res.status(statusCode).json({
        message,success:false,statusCode
    })
})





app.listen(8000,()=>{

console.log("port listening on 8000 sucessfully");
});