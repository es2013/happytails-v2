import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import { useAuth } from '../../utils/GlobalState';

function Navigation() {
  const { isAdmin, token } = useAuth();

  return (
    <header className="navbar-fixed">
      <nav>
        <div className="row nav-wrapper grey">
          <div className="col s6">
            <a href="/" className="homepage-link">
              Happy Tails
            </a>
          </div>

          <div className="col s6">
            <ul id="nav-mobile" className="right">
              {isAdmin && <li><Link to="/add-dog">Add a Dog</Link></li>}

              {isAdmin && <li><Link to="/view-users">Dog Lovers</Link></li>}

              {isAdmin && <li><Link to="/admin-dashboard">Dashboard</Link></li>}

              {!isAdmin && token && <li><Link to="/dashboard">Dashboard</Link></li>}

              <li><Link to="/donate">Donate</Link></li>

              {token && <li><Link id="logout" to="/logout">Logout</Link></li>}

              {!token && <li><Link to="/login">Login</Link></li>}
            </ul>
          </div>
        </div>
      </nav>



      {/* mobile view */}
      {/* <ul className="sidenav" id="mobile-admin-nav">
        {isAdmin && <li><Link to="/add-dog">Add a Dog</Link></li>}

        {isAdmin && <li><Link to="/view-users">Dog Lovers</Link></li>}

        {isAdmin && <li><Link to="/admin-dashboard">Dashboard</Link></li>}
      </ul> */}

    </header>
  );
}
export default Navigation;
