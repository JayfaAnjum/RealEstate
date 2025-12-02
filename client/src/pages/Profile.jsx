import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-8">
       
       
        
        <div className="my-8 border-b border-gray-300"></div>

        
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Account Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-500 text-sm">Full Name</p>
            <p className="font-medium text-gray-800">User Name</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email Address</p>
            <p className="font-medium text-gray-800">useremail@example.com</p>
          </div>

         

         
        </div>

        
        <div className="my-8 border-b border-gray-300"></div>

       
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Settings</h3>

        <div className="space-y-4">
          <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm border">
            Change Password
          </button>

           <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm border text-red-600">
            Edit Account
          </button>

          <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm border text-red-600">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
