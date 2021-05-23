import React from 'react';
import { Link } from 'react-router-dom';
import "./stylesheet.css";
import { useIsAdmin } from "../../utils/GlobalState"


function Navigation() {
    const { isAdmin } = useIsAdmin();
    console.log("Navigation:::isAdmin: ", isAdmin);
    
    return (
            <header className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper grey">
                        <a href="/" className="homepage-link">Happy Tails</a>
                        <ul id="nav-mobile" className="right">
                            {/* {{ #if loggedIn }} */}
                            {isAdmin && <Link to="/dashboard">Admin</Link>}
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

