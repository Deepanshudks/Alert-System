import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserDashboard from './components/User/UserDashboard'
import LandingPage from './components/LandingPage'
import UserLoginSignup from './components/User/UserLoginSignup'
import LawLoginSignup from './components/LawLoginSignup'
import UserLogin from './components/User/Userlogin'
import UserSignup from './components/User/UserSignup'
import LocationBasedAlerts from './Location'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route exact path='/'  element={<LandingPage/>}></Route>
       <Route path='/userdashboard'  element={<UserDashboard/>}></Route>
       <Route path='/userloginsignup'  element={<UserLoginSignup/>}></Route>
       <Route path='/lawloginsignup'  element={<LawLoginSignup/>}></Route>
       <Route path='/userlogin'  element={<UserLogin/>}></Route>
       <Route path='/usersignup'  element={<UserSignup/>}></Route>
      </Routes>
        
    </BrowserRouter>
    {/* <LocationBasedAlerts/> */}
    </>
  )
}

export default App
