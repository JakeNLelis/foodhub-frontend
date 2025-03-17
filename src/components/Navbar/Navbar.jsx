import { useState, useContext } from 'react'
import { FoodContext } from '../../context/FoodContext'
import { BiUser, BiCart } from 'react-icons/bi'
import { FaCentos } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [loading, setloading] = useState(false);
  
  const handleNavigation = (path) => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      navigate(path);
    }, 1000);
    
  }
  
  const {getCartCount, navigate} = useContext(FoodContext);
  
  return (
    <div>
      {
        loading && (
          <div className="loader-container">
            <div className="loader">
              <FaCentos className="loader-icon" />
            </div>
          </div>
        )
      }
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
          <button className='cart-icon' onClick={() => handleNavigation('/cart')}>
            <BiCart className="icon"/>
            <span className='cart-qty'>{getCartCount()}</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
