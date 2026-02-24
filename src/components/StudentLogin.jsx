import React from 'react'
import './Login.css'
import castle from '../assets/castle.jpg'

const StudentLogin = () => {
  return (
    <div className='login-body'>


      <div className="login-content">

        <div className="login-left">
        <img src={castle} alt="Castle Background" />
        </div>


        <div className="login-right">
          <div className="login-form">
            <h2><span>Student</span> Login</h2>
          <input type="number" placeholder="Student ID..." />
          <input type="password" placeholder="Password..." />
          <button>Login</button>
          <p>forgot password?</p>
          </div>
        </div>


      </div>









    </div>
  )
}

export default StudentLogin
