import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Header() {

  const username =useSelector((state)=>state.auth.username);
const [showMenu,setShowMenu]=useState(false);

const menuClick =()=>{

  setShowMenu(true);
}

const Logout = ()=>{


}
  

 
  return (
    <header className="w-full bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
      
        <h1 className="text-2xl font-bold text-gray-100">
          SweetHome
        </h1>

       
        <div className="hidden md:flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search locations, properties..."
            className="w-full px-4 py-2 rounded-l-xl bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none"
          />
          <button className="px-4 py-2 bg-gray-700 text-gray-100 rounded-r-xl hover:bg-gray-600">
            Search
          </button>
        </div>

      
        <nav className="hidden md:flex items-center space-x-6 text-gray-300">
          <Link to="/home" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          {!username ? (
            <>
          <Link to="/signup" className="hover:text-white">SignUp</Link>
          

          <button className="px-5 py-2 bg-gray-700 text-gray-100 rounded-xl hover:bg-gray-600">
            Login
          </button>
          </>
          ): (<div className="relative"><button onClick={menuClick} className="  px-5 py-2 bg-gray-700 text-gray-100 rounded-xl hover:bg-gray-600 cursor-pointer">
           { username}


           
     
          </button>
         {showMenu &&
         <div   className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg z-50">
          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700">
            Profile
          </Link>
          
          <button
            onClick={Logout}
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            Logout
          </button>
        </div>
}
     </div>   
        )
}
        </nav>

      </div>
    </header>
  );
}
