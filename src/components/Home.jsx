import React from 'react'
import './Home.CSS'
import logo from '../assets/logo.jpg'
import { UserRoundPlus,GraduationCap,UserCog,Users } from 'lucide-react' 
import welcome from '../assets/graduatelogo.svg'

const Home = () => {
  return (
    <div className="home-container">


      <div className="header">
        <img src={logo} alt="Student Portal Logo" />
        <h2>My Elite Academia</h2>
      </div>

       <div className="content">
        <div className="left">
            <span>Please select one of the options below to continue</span>
            <button><UserRoundPlus />Enrollment</button>
            <button><GraduationCap />Student</button>
            <button><UserCog />Faculty</button>
            <button><Users />Staff</button>
        </div>

        <div className="right">
        <h3>Welcome <img src={welcome} alt="Welcome" width="30" height="30" /></h3>
        <p>My Elite Academia is a student portal designed to provide students, faculty, 
           and staff with easy access to
           important information and resources. 
           Our mission is to create a seamless and efficient platform that 
           enhances the academic experience for everyone involved in our institution.</p>
        </div>
        </div>

    </div>
  )
}

export default Home
