import React, { useState,useEffect } from "react";
import './UI.css'
import { ChartArea,GraduationCap,ClipboardCheck,ClipboardList,BookOpenText,Clock } from 'lucide-react'
import logo from '../assets/logo.jpg' 

const StudentUI = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="student-ui-container">

    <nav>
      <ul>
        <button onClick={() => setActiveTab('Overview')} className={activeTab === 'Overview' ? 'active' : ''}>Overview<ChartArea/></button>
        <button onClick={() => setActiveTab('Enrollment')} className={activeTab === 'Enrollment' ? 'active' : ''}>Enrollment<GraduationCap/></button>
        <button onClick={() => setActiveTab('Report')} className={activeTab === 'Report' ? 'active' : ''}>Reports<ClipboardCheck/></button>
        <button onClick={() => setActiveTab('Transcript')} className={activeTab === 'Transcript' ? 'active' : ''}>Transcript<ClipboardList/></button>
        <button onClick={() => setActiveTab('Exam')} className={activeTab === 'Exam' ? 'active' : ''}>Exam<BookOpenText/></button>
      </ul>
    </nav>

      
    <div className="student-ui-content">

    {/*Overview Tab*/}
    {activeTab === 'Overview' && (
      <div>
      <div className="overview">

        <div className="card-1">
          <h3>Achievements</h3>
        </div>

        <div className="card-2">
         <h3>Modules</h3>
        </div>

        <div className="card-3">
          <h3>Exams</h3>
        </div>

       
      </div>
       <div className="overview-content">
          <h3><Clock size={20}/>Recent Activity</h3>
          <span><p>Hi</p></span>
        </div>
      </div>
    )}



      {/*Enrollment*/}
      {activeTab=== 'Enrollment'&&(

        <div className="enrollment">
          <h3>Proof of Enrollment<img src={logo} alt="Student Portal Logo" /></h3>
          <hr />
          <p>It is hereby confirmed that the under mentioned person is a registered student at My <span>Elite</span> Academia</p>
          <div className="identity">
          <h4>Identity</h4>
          <hr />
          <ul>
            <li>Student Number: </li>
            <li>ID Number:</li>
            <li>Name:</li>
            <li>Duration:</li>
            <li>Qualification:</li>
          </ul>
          </div>
          <div className="modules">
          <h4>Modules</h4>
          <hr />
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Credits</th>
                <th>Semester</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          </div>

        </div>
      )}

    </div>






    </div>
  )
}

export default StudentUI
