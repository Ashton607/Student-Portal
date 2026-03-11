import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Register from './components/Register'
import StudentLogin from './components/StudentLogin'
import AdminLogin from './components/admin/AdminLogin'
import AdminUI from './components/admin/AdminUI'
import Staff from './components/Staff'
import StudentUI from './components/StudentUI'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/studentUI" element={<StudentUI />} />
        <Route path="/adminUI" element={<AdminUI />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
