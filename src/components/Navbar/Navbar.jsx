import React from 'react'
import { BiUser, BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">
            <h2>FoodHub</h2>
          </Link>
        </div>
        <div className='search-bar'>
          <input type="text" className='search-input' placeholder='Search for products...' />
          <button className='search-btn'>SEARCH</button>
        </div>
        <div className='icons'>
          <div className='profile-group'>
            <BiUser className='icon' />
            <div className="dropdown-menu">
              <Link to="/login"><p className="dropdown-items">Login/Sign-up</p></Link>
              <Link to="/orders"><p className="dropdown-items">Orders</p></Link>
              <p className='dropdown-items'>Log out</p>
            </div>
          </div>
          <button className='cart-icon'>
            <BiCart className="icon"/>
            <span className='cart-qty'>0</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
