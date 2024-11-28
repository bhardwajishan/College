import React, { useEffect, useState } from 'react'
import "./Login.css"
import erpData from "../../data.json"



function Login() {

  const [username,setUsername] = useState("")
  const [pass,setPass] = useState("")
  const [data,setData] = useState([])

  
 

  useEffect(()=>{
    setData(erpData)
  },[])


  const handleSubmit = (e)=>{
    e.preventDefault()
    const value = data[username-1]
    if(value!=null){
      if(pass===value.password){
        
      }else{
        console.log("Galat Password")
      }
    }else{
      console.log("Nhi Mila")
    }
    setUsername("")
    setPass("")
  }

  return (
    <div className='Login'>
      <div className="demo">
      <h2>Welcome Back</h2>
      <p>Please login to access your dashboard</p>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setUsername(e.target.value)} value={username} autoComplete='off' type="text" placeholder='Roll Number' />
        <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" placeholder='Password' />
        <button>Login</button>
      </form>
      <div className="extra">
        <a href="/forgot-password">Forgot Password?</a>
        <a href="/register">New here? Register</a>
      </div>
    </div>
  </div>

  )
}

export default Login