import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashoard from './components/UserDashboard'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Userlogin } from './components/User/Userlogin'
import Dash from './components/Dash'
import UserDashboard from './components/UserDashboard'
import { UserSignup } from './components/User/UserSignup'
import LandingPage from './components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path='/'  element={<LandingPage/>}></Route>
       <Route path='/dashboard'  element={<UserDashboard/>}></Route>
       <Route path='/userlogin'  element={<Userlogin/>}></Route>
       <Route path='/usersignup'  element={<UserSignup/>}></Route>
      </Routes>
        
    </BrowserRouter>
    </>
  )
}

export default App
