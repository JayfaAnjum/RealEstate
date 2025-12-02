import User from '../models/userModel.js';
import Jwt from 'jsonwebtoken';
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


export const signin = async(req,res,next)=>{

    try{

        const {username,password} =req.body;
         const validUser =await User.findOne({username});

         if(!validUser){
            return next(errorHandler("invalid username",404));
         }

            const isPasswordCorrect =bcryptjs.compareSync(password,validUser.password);

            if(!isPasswordCorrect){
                return next(errorHandler("invalid password", 400));
            }

          const token =  Jwt.sign({

            id:validUser._id,
          },process.env.JWT_SECRET,{})
          res.cookie("token",token,{
            httpOnly:true,
            expires:new Date(Date.now()+24*60*60*1000),

          }).status(200).json({success:true,message:"user Logged in successfully",user:validUser,token});


    }
    catch(error){
        next(errorHandler(error.message,500));
    }
}

export  const logout = (req , res,next)=>{

try{
    res.cookie("token","",{

      httpOnly:true,
      expires:new Date(Date.now()),
    }).status(200).json({success:true,message:"user Logged out successfully"});
    


}
catch(error){

next(errorHandler(error.message,500));
}
}