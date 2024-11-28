import React from 'react'
import "./Card.css"

function Card({title}) {
  return (
    <div className='Card'>
        <div className="card-title">
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default Card