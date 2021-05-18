import React from 'react';

function Navigation() {

    return (
        <header className="navbar-fixed">
            <nav>
                <div className="nav-wrapper deep-purple darken-2">
                    <a href="/" className="homepage-link">Happy Tails</a>
                    <ul id="nav-mobile" className="right">
                        {/* {{ #if loggedIn }} */}
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a id="logout" href="/logout">Logout</a></li>
                        {/* {{ else}} */}
                        <li><a href="/login">Login</a></li>
                        {/* {{/if}} */}
                    </ul>
                </div>

            </nav>
        </header>
    )
};

export default Navigation;

