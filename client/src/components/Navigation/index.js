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
          <div className="col s6 ">
            <a href="/" className="homepage-link">
              Happy Tails
            </a>
            {/* <a href="#" data-target="mobile-admin-view" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
        </div>

          <div className="col s6">
            {/* <ul id="nav-mobile" className="right hide-on-med-and-down"> */}
            <ul id="nav-mobile" className="right">
              {/* {isAdmin && <li><Link to="/add-dog">Add a Dog</Link></li>} */}

              {/* {isAdmin && <li><Link to="/view-users">Dog Lovers</Link></li>} */}

              {isAdmin && <li><Link to="/admin-dashboard">Dashboard</Link></li>}

              {!isAdmin && token && <li><Link to="/dashboard">Dashboard</Link></li>}

              {/* <li><Link to="/donate">Donate</Link></li> */}

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

      {!isAdmin && token && <li><Link to="/dashboard">Dashboard</Link></li>}

      <li><Link to="/donate">Donate</Link></li>

      {token && <li><Link id="logout" to="/logout">Logout</Link></li>}

      {!token && <li><Link to="/login">Login</Link></li>}
      </ul> */}

      {/* <script>
        {$(document).ready(function(){
         $('.sidenav').sidenav()})}
      </script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> */}

    </header>
  );
}
export default Navigation;
