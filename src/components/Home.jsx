import React from 'react'
import './Home.CSS'
import logo from '../assets/logo.jpg'

const Home = () => {
  return (
    <div className="home-container">


      <div className="header">
        <img src={logo} alt="Student Portal Logo" />
        <h2>My Elite Academia</h2>
      </div>

        <div className="left">
            <button>Register</button>
            <button>Student</button>
            <button>Faculty</button>
            <button>Staff</button>
        </div>

    </div>
  )
}

export default Home
