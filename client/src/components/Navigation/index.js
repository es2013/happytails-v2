import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import { AuthContext } from '../../utils/GlobalState';

function Navigation() {
  // const { isAdmin, token } = useAuth();
  if (AuthContext.token && AuthContext.IsAdmin) {
    return (
      <header className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey">
            <a href="/" className="homepage-link">
              Happy Tails
            </a>
            <ul id="nav-mobile" className="right">
              <Link to="/dashboard">Admin</Link>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link id="logout" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } 
  else if (AuthContext.token && !AuthContext.IsAdmin) {
    console.log()
    return (
      <header className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey">
            <a href="/" className="homepage-link">
              Happy Tails
            </a>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link id="logout" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey">
            <a href="/" className="homepage-link">
              Happy Tails
            </a>
            <ul id="nav-mobile" className="right">
              <Link to="/login">Login</Link>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;
