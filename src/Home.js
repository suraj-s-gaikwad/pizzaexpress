import React from 'react'
import hp from './images/img8.jpeg'
import { Link } from 'react-router-dom' 

export default function  Home () {
  return (
    <div className="home" style={{ backgroundImage: `url(${hp})` }}>
        <div className="headerContainer">
          <h1>Pizza Express</h1>
          <p>Best pizza In India</p>
          <Link to="/Menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
  )
}
