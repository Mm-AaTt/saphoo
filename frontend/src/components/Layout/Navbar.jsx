import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Navbar.css';
import logoImage from '../../assets/images/e042c68bc135731764c13f7bd0850e97.png';

const Navbar = () => {
    return(
        <nav className = "navbar">
            <div className = "ncontainer">
                <Link to="/"> <img src={logoImage} alt="Logo" className='navbar-logo'/></Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;