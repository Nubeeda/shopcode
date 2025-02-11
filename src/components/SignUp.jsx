import { useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';
const SignUp = () => {
    const [passwordType,setPasswordType] =useState("password")
  return (
    <div className="grid md:grid-cols-2 overflow-hidden md:h-screen animate__animated animate__fadeIn">
      <img src="./images/signup.jpg" className="md:h-full h-48 object-cover w-full" />
      <div className="flex flex-col md:p-16 p-8">
        <h1 className="text-2xl font-semibold">New User</h1>
        <p className="text-gray-500 mt-1">
          Create your account to start shopping
        </p>
        <form className="md:mt-8 space-y-6">
          <div className="flex flex-col mb-3">
            <label className="font-semibold pb-2">FirstName</label>
            <input
              required
              name="firstname"
              type="text"
              placeholder="Enter your firstname"
              className="border p-2 border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="font-semibold pb-2">LastName</label>
            <input
              required
              name="lastname"
              type="text"
              placeholder="Enter your lastname"
              className="border p-2 border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold pb-2">Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="border p-2 border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col mb-2 relative">
            <label className="font-semibold pb-2">Password</label>
            <input
              required
              name="password"
              type={passwordType}
              placeholder="*******"
              className="border p-2 border-slate-300 rounded"
            />
            <button 
            onClick={()=>setPasswordType(passwordType === "password" ? "text" : "password")}
            type="button"
            className="top-10 right-4 absolute hover:bg-blue-50 hover:text-blue-700 h-8 w-8 rounded-full">
              {
                passwordType === "password"
                ?
                <i className="ri-eye-line"></i>
                :
                <i className="ri-eye-off-line"></i>
              }
              
            </button>
          </div>

          <button className="bg-blue-600 text-white font-semibold w-26 py-3 mb-2 rounded mt-4 hover:bg-rose-600">
            Signup
          </button>
        </form>
        <div className="flex">
        <p>Already have an account?</p>
        <Link to="/login" className="text-blue-500 ml-1">
        Login now
        </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
