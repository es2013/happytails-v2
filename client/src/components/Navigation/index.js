import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import { useAuth } from '../../utils/GlobalState';

function Navigation() {
  const { isAdmin, token, currentUsername } = useAuth();

  return (
    <header className="navbar-fixed">
      <nav>
        <div className="row nav-wrapper grey">
          <div className="col s6 ">
            <a href="/" className="homepage-link">
              Happy Tails
            </a>
            {/* <a href="#" data-target="mobile-admin-view" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
        </div>

          <div className="col s6">
            <ul id="nav-mobile" className="right">
              {isAdmin && <li><Link to="/admin-dashboard"><span className="username">{currentUsername}'s</span> Dashboard</Link></li>}
              {!isAdmin && token && <li><Link to="/dashboard"><span className="username">{currentUsername}'s</span> Dashboard</Link></li>}
              {token && <li><Link id="logout" to="/logout">Logout</Link></li>}
              {!token && <li><Link to="/login">Login</Link></li>}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navigation;
