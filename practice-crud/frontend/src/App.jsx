import { useState } from 'react'
import Home from './pages/home'
import { Route,Routes } from 'react-router-dom'
import './App.css'

// set up the react router dom


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/abc/:id' element={<Home/>}/>
    </Routes>
    
    </>
  )
}

export default App
