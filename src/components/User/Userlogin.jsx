import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export function Userlogin (){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            username,password
        })
        if(response.data.token){
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
            toast.success("Successfully logged in")
        }else{
            toast.error("Login failed")
        }
    }

   return <div className="flex items-center h-full w-screen justify-center flex-col bg-slate-200">
    <Toaster/>
    <div className="flex items-center flex-col justify-center  w-screen">
    <div className="text-xl font-bold mt-2 rounded-xl">Welcome to Arista</div>
    <div className="text-base m-2 font-base text-zinc-500 mt-2">Enter your credentials to Login</div>
    </div>

    <div className=" m-4 w-screen flex flex-col rounded-lg justify-center items-center  bg-slate-100">
        
        <input onChange={(e)=>{
            setUsername(e.target.value)
        }} placeholder="Username" value={username} className="mt-6 w-full sm:w-[305px] m-2 font-extralight text-sm px-4 p-1  border border-slate-800 rounded-full" id="username" autoComplete="on" type="text" />
        <input onChange={(e)=>{
            setPassword(e.target.value)
        }} placeholder="Password" value={password} className="font-extralight text-sm px-4 p-1 w-full sm:w-[305px] m-2 border border-slate-800 rounded-full" id="password" type="password" autoComplete="on" />
        <button onClick={handleSubmit} className="p-2 w-full sm:w-[305px] m-4 border  bg-black text-white hover:bg-gray-800 border-indigo-950 rounded-full">Login</button>

        <p className=" text-base font-semibold text-zinc-600" >Don't have an account?</p>
        <div className="flex items-center mb-4">
        <p className="text-base font-normal text-zinc-600 px-2" >Create new account </p>
        <p  className="cursor-pointer underline"><Link to="/usersignup">Sign Up</Link></p>
        </div>
    </div>
   </div>
}