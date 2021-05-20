import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <header className="navbar-fixed">
            <nav>
                <div className="nav-wrapper deep-purple darken-2">
                    <Link to="/" className="homepage-link">Happy Tails</Link>
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

