import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginMutation } from "../services/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUsername } from "../slices/authSlice";


export default function Login() {


  const [login] = useLoginMutation();
const [data,setData] =useState({

  username:"",
 
  password:""
});
const navigate = useNavigate();
const dispatch =useDispatch();
const [error,setError] =useState({});
const [showError,setShowError]=useState(false);

const handleChange =(e)=>{


  setData({
    ...data,[e.target.name]:e.target.value
  });
}

const validate =()=>{

  const error={};

  if(!data.username){
   error.username="required username!"
  }

  if(!data.password){
    error.password="required password"
  }
setError(error);

  return Object.keys(error).length==0
}


const handleSubmit = async(e)=>{
 
  e.preventDefault();

if(!validate()){

  setShowError(true);
  return;
}

try{

const result =await login(data).unwrap();
dispatch(setUsername(result.user.username));
navigate("/home");

toast.success("Login successfull");

}
catch(error){

 toast.error(error.data.message);
 
}
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Sign Up to SweetHome
        </h2>

       
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>
          {showError && (<p className="text-red-500">{error.username}</p>)}

        
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>
           {showError && (<p className="text-red-500">{error.password}</p>)}

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Log in
          </button>

         
          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg mt-3 hover:bg-gray-100 transition-colors"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/signup" className="text-blue-900 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

