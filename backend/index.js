import express from 'express';
import connectDatabase from './config/connectDatabase.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDatabase()


app.listen(8000,()=>{

console.log("port listening on 8000 sucessfully");
});