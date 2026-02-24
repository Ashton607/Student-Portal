import React from 'react'
import castle from '../assets/castle.jpg'
import './Login.css'

const Staff = () => {
  return (
    <div className='login-body'>
        
        
              <div className="login-content">
        
                <div className="login-left">
                <img src={castle} alt="Castle Background" />
                </div>
        
        
                <div className="login-right">
                  <div className="login-form">
                    <h2><span>Personell</span> Login</h2>
                  <input type="number" placeholder="Personell ID..." />
                  <input type="password" placeholder="Password..." />
                  <button>Login</button>
                  <p>forgot password?</p>
                  </div>
                </div>
        
        
              </div>
        
            </div>
  )
}

export default Staff
