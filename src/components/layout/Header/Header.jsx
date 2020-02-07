import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
class Header extends Component {
  render () {
    return (
      <div className="header-outer">
        <div className="header-inner">
          <div className="header-logo">
          </div>
          <ul className="header-links">
            <li className="list-item"><Link to="/">Home</Link></li>
            <li className="list-item"><Link to="/user/dashboard">Dashboard</Link></li>
            <li className="list-item"><Link to="/user/booking">Book a Ride</Link></li>
            <li className="list-item"><button>Logout</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header