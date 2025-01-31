import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Homepage from '../Components/Homepage'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Homepage />} path='/'></Route>
      </Routes>
    </Router>
  )
}

export default App
