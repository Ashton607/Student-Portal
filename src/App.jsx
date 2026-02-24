import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Register from './components/Register'
import StudentLogin from './components/StudentLogin'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
