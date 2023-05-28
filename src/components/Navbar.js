import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='sum'>
        <div className='logo'>
            Personality
        </div>
        <nav classitem="item">
            <ul className="ul">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;
