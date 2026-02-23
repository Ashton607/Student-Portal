import React, { useState,useEffect } from "react";
import './Register.css'
import logo from '../assets/logo.jpg'
import career from '../assets/career.jpg'
import support from '../assets/download.jpg'
import graduate from '../assets/graduate.jpg'
import featherleft from '../assets/featherL.svg'
import featherright from '../assets/featherR.svg'
import send from '../assets/send.svg'


const Register = () => {
  return (
    <div className='register-body'>
      
        <div className="register-header">
          
          
          <div className="register-content">
           
          <div className="Reg-left">
          
          <div className="register-right-text">
            <h2><img src={logo} alt="Student Portal Logo" />Enrollment</h2>
            <h4>My <span>Elite</span> Academia</h4>
            <p>Begin your academic journey. Complete your enrollment
            to access all campus resources <br /> and services.</p>
          </div>
          </div>


          <div className="Reg-right">
          <h3>Why Join Us?</h3>
          <p><img src={career} alt="Career Development" />Shaping Minds. Building Careers. Changing Lives,</p>
          <p><img src={support} alt="support" />We've Got You, Every Step of the Way,</p>
          <p><img src={graduate} alt="Graduation" />Every Student. Every Milestone. Every Time.</p>
          </div>
        </div>
        </div>


        <div className="credentials">
          <h3>Personal</h3>
          <hr />
          <div className="form">
        
          <input type="text" placeholder="First Name"/>

          <input type="text" placeholder="Last Name"/>
          
          <input type="email" placeholder="Email"/>

          <input type="tel" placeholder="Phone"/>

          <select>
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <select>
            <option value="" disabled selected>Select Nationality</option>
            <option value="south-african">South African</option>
            <option value="other">Other</option>
          </select>

          <input type="number"  placeholder="ID" />

          <select>
            <option value="" disabled selected>Ethnicity</option>
            <option value="Black">Black</option>
            <option value="Coloured">Coloured</option>
            <option value="Indian">Indian/Asian</option>
            <option value="White">White</option>
          </select>

          <input type="date" placeholder="Date of Birth"/>

          <input type="text" placeholder="Province/State"/>

          <input type="text" placeholder="City"/>

          <input type="number" placeholder="Postal Code"/>
          
          </div>
          </div>



          <div className="documents">
          <h3>Documents</h3>
          <hr />
          <div className="form">

          <label htmlFor="provisional-results">June/Provisional Results</label>
          <input id="provisional-results" type="file" placeholder="June/Provisional Results"/>

          <label htmlFor="academic-transcript">Academic Transcript</label>
          <input id="academic-transcript" type="file" placeholder="Academic Transcript"/>
          </div>
          </div>




          <div className="courses">
          <h3>Courses</h3>
          <hr />
          <div className="form">
          
          <select>
            <option value="" disabled selected>Faculty</option>
            <option value="NAS">Natural and Applied Sciences</option>
            <option value="Edu">Education</option>
            <option value="Eco">Economics and Management Sciences</option>
            <option value="Hum">Humanities</option>
          </select>

          <select>
            <option value="" disabled selected>Programme & Qualification</option>
            <option value="NAS">Diploma in ICT App Dev</option>
            <option value="Edu">Bed in Senior/FET Phase</option>
            <option value="Eco">Bcom in Accounting</option>
            <option value="Hum">BA in English Literature</option>
          </select>

          <input type="number" placeholder="Year of Study" />

          <select>
            <option value="" disabled selected>Semester</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="full">Full Year</option>
          </select>

          <select>
            <option value="" disabled selected>Core Modules</option>
            <option value="NAS">Software Engineering</option>
            <option value="Edu">English FAL</option>
            <option value="Eco">Business Studies</option>
            <option value="Hum">History</option>
          </select>

          <select>
            <option value="" disabled selected>Elective Modules</option>
            <option value="NAS">Software Engineering</option>
            <option value="Edu">English FAL</option>
            <option value="Eco">Business Studies</option>
            <option value="Hum">History</option>
          </select>
          </div>
          </div>


          <div className="submit">
          <button type="submit">Submit Application<img src={send} alt="send" className="send-icon"/></button>
          </div>


        <div className="divider-row">
        <img src={featherright} alt="fr" className="fr"/>
        <hr />
        <img src={featherleft} alt="fl" className="fl" />
        </div>





    </div>
  )
}

export default Register
