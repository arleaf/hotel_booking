import React from "react";
import { Link } from 'react-router-dom';
const NavBar = () => {
    //Navbar for website
    //includes routes for different functionalities
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">

            <button
                className="navbar-toggler"
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='#navbarNavAltMarkup'
                aria-expanded='false'
                aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarNavAltMarkup'>
                <div className="navbar-nav">
                    <span className="nav-item nav-link" href='#'>
                        <Link to='/'>Home</Link>
                    </span>
                    <span className="nav-item nav-link" href='#'>
                        <Link to='/reservations'>My Reservations</Link>
                    </span>
                    <span className="nav-item nav-link" href='#'>
                        <Link to='/rooms'>Rooms</Link>
                    </span>
                    <span className="nav-item nav-link" href='#'>
                        <Link to='/login'>Login</Link>
                    </span>
                    <span className="nav-item nav-link" href='#'>
                        <Link to='/signUp'>Sign Up</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;