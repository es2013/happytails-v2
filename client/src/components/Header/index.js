import React from 'react';

function Header() {

    return (
        <header class="navbar-fixed">
            <nav>
                <div class="nav-wrapper deep-purple darken-2">
                    <a href="/" class="homepage-link">Happy Tails</a>
                    <ul id="nav-mobile" class="right">
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

export default Header;

