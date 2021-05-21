import React from 'react';
import {Link} from 'react-router-dom';
import "./stylesheet.css";


function Navigation() {

    return (
        <header className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="homepage-link">Happy Tails</a>
                    <ul id="nav-mobile" className="right">
                        {/* {{ #if loggedIn }} */}
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link id="logout" to="/logout">Logout</Link></li>
                        {/* {{ else}} */}
                        <li><Link to="/login">Login</Link></li>
                        {/* {{/if}} */}
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Navigation;

