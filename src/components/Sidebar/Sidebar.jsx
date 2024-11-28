import React from 'react'
import "./Sidebar.css"
function Sidebar({data}) {
  return (
    <div className='Sidebar'>
        {data.map((item)=>{
            return (
                <button><h5>{item}</h5></button>
            )
        })}
    </div>
  )
}

export default Sidebar