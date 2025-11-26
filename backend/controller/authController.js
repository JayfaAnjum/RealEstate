import User from '../models/userModel.js';

import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req,res,next)=>{

   
    

    try{

         const { username,email,password}=req.body;

         if(!username || !email || !password){
          return next(errorHandler("all fields are required",400));
           
         }
        const hashedPassword = bcryptjs.hashSync(password,10);
        const newUser =  new User({username,email,password:hashedPassword});
        await newUser.save();
        res.status(201).json({success:true,message:"user registered successfully"});


    }
    catch(error){

       return next(errorHandler(error.message,500));

    }


}

