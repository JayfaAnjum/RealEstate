import express from 'express';
import connectDatabase from './config/connectDatabase.js';
import dotenv from 'dotenv';
import authRoute from './routes/authRoutes.js'

dotenv.config();

const app = express();

connectDatabase()
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