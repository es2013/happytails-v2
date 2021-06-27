import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheet.css';
import { useAuth } from '../../utils/GlobalState';

function Navigation() {
  const { isAdmin, token, currentUsername } = useAuth();

  function DashboardLink() {
    if (!isAdmin && token) {
      return (
        <header className="navbar-fixed">
          <nav>
            <div className="row nav-wrapper grey">
              <div className="col s6 ">
                <a href="/" className="homepage-link">
                  Happy Tails
                </a>
              </div>

              <div className="col s6">
                <ul id="nav-mobile" className="right">
                  <li><Link to="/dashboard"><span className="username">{currentUsername}'s</span> Dashboard</Link></li>
                  <li><Link id="logout" to="/logout">Logout</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      )
    }
  }

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
              {/* if user is admin, but not logged in they will see the " 's Dashboard"  this may be the issue */}
              {/* add && token to line makes no difference */}
              {/* perhaps something to do with the way that span is set up? Tried using p tag and adding concatination within the JSX expression, but no change.*/}
              {/* {isAdmin && <li><Link to="/admin-dashboard"><p className="username">{currentUsername + "'s Dashboard"}</p></Link></li>}  */}
              {/* lets try an if-else statement in a function above the return */}

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
