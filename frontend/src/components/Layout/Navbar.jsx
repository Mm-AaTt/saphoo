import React from 'react';
import {Link} from 'react-router-dom';
import '/Users/matinatuladhar/Desktop/final-saphoo-mhicha/frontend/src/styles/Navbar.css';

const Navbar = () => {
    return(
        <nav className = "navbar">
            <div className = "container">
                <Link to="/"> <img src={require('/Users/matinatuladhar/Desktop/final-saphoo-mhicha/frontend/src/assets/images/logo.png')} alt="Logo" className='navbar-logo'/></Link>
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