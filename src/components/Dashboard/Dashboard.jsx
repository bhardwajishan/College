import React from 'react'
import Student from '../Student/Student'
import Faculty from '../Faculty/Faculty'
import Admin from '../Admin/Admin'
import Login from '../Login/Login'

function Dashboard() {

    const dashboard = "Student"
  return (
    dashboard==="Student"?
    <>
    <Student/>
    </>:dashboard==="Faculty"?
    <>
    <Faculty/>
    </>:dashboard==="Admin"?
    <>
    <Admin/>
    </>:
    <>
    <Login/>
    </>
  )
}

export default Dashboard