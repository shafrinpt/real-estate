import React, { Component, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'




const App = () => {
  const[showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin}/>:<></>}
    <div className='w-full overflow-hidden'>
      <Navbar setShowLogin={setShowLogin}/>
      <ToastContainer />
      <Routes>
      <Route path='/' element={<Home />}/>
      
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/testimonials' element={<Testimonials />}/>
      <Route path='/contact' element={<Contacts />}/>
      
      </Routes>
      <Footer />
      </div>
     

      </>
    
  )
}

export default App