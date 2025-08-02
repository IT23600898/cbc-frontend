import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import AdminHomePage from '../pages/adminHomePage'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (

  
    <>
  <BrowserRouter>
  <Toaster/>

  <Routes path="/*">
     <Route path= "/" element={<HomePage/>}/>
     <Route path= "/login" element={<LoginPage/>}/>
     <Route path= "/signup" element={<UserData/>}/>
      <Route path= "/admin/*" element={<AdminHomePage/>}/>
     <Route path= "/*" element={<HomePage/>}/>

  </Routes>


  


  </BrowserRouter>
  
    </>
  )
}

export default App
