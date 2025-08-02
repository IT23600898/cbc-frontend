//import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
export default function LoginPage() {

  const [email, setEmail]=useState("Your email")
  const [password, setPassword]=useState("")

  function login(){
    axios.post("http://localhost:5000/api/users/login", {
      email: email,
      password: password

    }).then((res)=>{

    if(res.data.user == null){
      toast.error(res.data.message)
      return
    }
      toast.success("Login Success")
      localStorage.setItem("token", res.data.token)
      if(res.data.user.type == "admin"){
        window.location.href = "/admin"

      }else{
        window.location.href = "/"
      }
    
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="w-[450px] h-[450px] bg-blue-300 flex flex-col justify-center items-center rounded-2xl p-6 space-y-6">
        
        {/* Centered Logo */}
        <img src="/logo-cbc.jpg" alt="Logo" className="rounded-full w-[100px]" />

        {/* Email Field */}
        <input defaultValue={email} onChange={(e)=>{
           setEmail(e.target.value)
        }}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Field */}
        <input defaultValue={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button onClick={login} 
        className="bg-white">Login</button>
      </div>
    </div>
  );
}
