import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import { useAuth } from '../../utils/GlobalState';

const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

// import menuIcon from '../../images/menu-icon.png'

function Navigation() {
  const { isAdmin, token } = useAuth();

 const sidebar = () => {
    $(document).ready(function () {
      $('.sidenav').sidenav();
    });
  }
  
  return (
    <header className="navbar-fixed">
      <nav>
        <div className="nav-wrapper grey">
          <a href="/" className="homepage-link">
            Happy Tails
          </a>

          {/* sidebar trigger */}
          <a onClick={sidebar} href="#" data-target="mobile-view" className="sidenav-trigger"><i className="material-icons">MENU</i></a>
          <ul id="nav-mobile" className="right">
            {/* {isAdmin && <li><Link to="/add-dog">Add a Dog</Link></li>} */}

            {/* {isAdmin && <li><Link to="/view-users">Dog Lovers</Link></li>} */}

            {/* {isAdmin && <li><Link to="/admin-dashboard">Dashboard</Link></li>} */}

            {!isAdmin && token && <li><Link to="/dashboard">Dashboard</Link></li>}

            <li><Link to="/donate">Donate</Link></li>

            {token && <li><Link id="logout" to="/logout">Logout</Link></li>}

            {!token && <li><Link to="/login">Login</Link></li>}
          </ul>
        </div>
      </nav>

      {/* mobile view */}
      <ul className="sidenav" id="mobile-admin-nav">
        {isAdmin && <li><Link to="/add-dog">Add a Dog</Link></li>}

        {isAdmin && <li><Link to="/view-users">Dog Lovers</Link></li>}

        {isAdmin && <li><Link to="/admin-dashboard">Dashboard</Link></li>}
      </ul>

    </header>
  );
}
export default Navigation;
