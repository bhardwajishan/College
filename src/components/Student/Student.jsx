import React, { useEffect, useState } from 'react'
import "./Student.css"
import erpData from "../../data.json"
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import ProgressChart from './ProgressChart'
import RingChart from './RingChart'



function Student() {
  
  const [data,setData] = useState("")
  const opt = ["Dashboard", "My Course", "Payment", "Query", "Project Submission","Semester Break", "Convocation","Virtual Lab", "Exam FAQ", "Marksheets"]

  useEffect(()=>{
    const students = erpData.filter((item)=>item.role==="Student")
    setData(students)
    console.log(data)
  },[])
  return (
    <div className='Student'>
      <Header/>
      <div className="container">
        <Sidebar data={opt}/>
        <div className="left">
        <div className="main-content">
        {/* Cards */}
          <div className="cards">
            <div className="card">Open Queries</div>
            <div className="card">Assignments</div>
            <div className="card">Projects</div>
            <div className="card">Sports</div>
          </div>

        {/* Charts */}
          <div className="charts">
            <ProgressChart/>
            <RingChart/>
          </div>

        {/* Assignments Table */}
          <div className="assignments">
            <h3>Assignments</h3>
            <table>
              <tr>
                <th>Subject</th>
                <th>Start Date</th>
                <th>Status</th>
              </tr>
              {/* Add rows dynamically */}
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Student