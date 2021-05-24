import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import { useAuth } from '../../utils/GlobalState';

function Navigation() {
  const { isAdmin, token } = useAuth();

  return (
    <header className="navbar-fixed">
      <nav>
        <div className="nav-wrapper grey">
          <a href="/" className="homepage-link">
            Happy Tails
          </a>
          <ul id="nav-mobile" className="right">
            {/* {isAdmin && <Link to="/dashboard">Admin</Link>} */}
            <li><Link to="/admin-dashboard">Dashboard</Link></li>
            {/* {token && ( */}
              <li><Link id="logout" to="/logout">Logout</Link></li>
            {/* )} */}
            {/* {!token && ( */}
              <li><Link to="/login">Login</Link></li>
            {/* // )} */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
