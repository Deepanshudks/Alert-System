import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export function UserSignup() {
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/v1/user/signup", {
            username, firstName, lastName, password
        }).then(res =>{
            const token = localStorage.setItem("token", res.data.token)
            console.log(token)
                 toast.success("Successfully signup")
                 navigate("/dashboard")
                 return
        }).then(err=>{
            toast.error("Failed to create account")
            console.log(err)
        })
          
        
    }
   
    return <div className="flex items-center h-full w-screen justify-center flex-col bg-slate-200">
        <Toaster />
        <div className="flex items-center flex-col justify-center  w-screen">
            <div className="text-xl font-bold mt-2 rounded-xl">Welcome to Arista </div>
            <div className="text-base mt-2  font-base text-zinc-500 m-2">Enter your informations to create an account</div>
        </div>

        <form className=" mt-6 w-full m-2 flex flex-col rounded-lg justify-center items-center  bg-slate-100">
            <input onChange={(e) => {
                setFirstname(e.target.value)
            }} value={firstName} placeholder="First Name" className="w-full sm:w-[305px] my-2 font-extralight text-sm px-4 p-1  mt-4 border border-slate-800 rounded-full" id="firstname" type="text" autoComplete="on" />
            <input onChange={(e) => {
                setLastname(e.target.value)
            }} value={lastName} placeholder="Last Name" className="sm:w-[305px] my-2 w-full font-extralight text-sm px-4 p-1  border border-slate-800 rounded-full" id="lastname" type="text" autoComplete="on" />
            <input onChange={(e) => {
                setUsername(e.target.value)
            }} value={username} placeholder="Username" className="sm:w-[305px] my-2 w-full font-extralight text-sm px-4 p-1  border border-slate-800 rounded-full" id="username" type="text" autoComplete="on" />
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} value={password} placeholder="Password" className="font-extralight w-full text-sm px-4 p-1 sm:w-[305px] my-2 border border-slate-800 rounded-full" id="password" type="password" autoComplete="on" />
            <button className="px-4 py-1 w-full sm:w-[305px] my-2 border  bg-black  text-white hover:bg-gray-800 border-indigo-950 rounded-full" onClick={handleSubmit} >SignUp</button>

            <div className="flex mb-4">
                <p className="font-light">Already have an account?</p>
                <p className="mx-2 cursor-pointer font-semibold underline"><Link to="/login">Login</Link> </p>
            </div>
        </form>
    </div>
}