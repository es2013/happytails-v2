import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { StoreProvider } from './utils/GlobalState';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/AdminDashBoard';
import Dashboard from './pages/Dashboard';
//import AdminDashboard from './pages/AdminDashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleDog from './pages/SingleDog';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { AuthContext } from './utils/GlobalState';
import Logout from './pages/Logout';
import AdminAddDog from './pages/AdminAddDog';
import ViewUsers from './pages/ViewUsers';
import Donate from './pages/Donate';
import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENT_USER } from './utils/queries';

/*
The purpose of this is to add an additional check on isAdmin after any update such
as adding a new dog or updating a dog.  After each update and the user is routed
back to the Dashboard we need to do a hard refresh for the new data to show up
on the dashboard.  The hard refresh resets the isAdmin status to false causing
us to lose the isAdmin=true status.  In this case, when the user is routed back to
the dashboard, we will query the user's info again using the token.  Once we receive
the data back confirming that the current user is still an admin, we reset
isAdmin to true again.
*/
function AuthenticationGuard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);
  const [currentUsername, setCurrentUsername] = useState(null);

  const { loading, data, error } = useQuery(GET_CURRENT_USER, {
    variables: { username: currentUsername },
  });

  // if (loading) return 'Loading GET_CURRENT_USER ...';
  // if (error) return `GET_CURRENT_USER Error: ${error.message}`;

  console.log('##111 data: ', data);

  useEffect(() => {
    const token = localStorage.getItem('id_token');

    setToken(token);
  }, [token]);

  useEffect(() => {
    if (data) {
      console.log('##222 data: ', data);
      setIsAdmin(data.me.isAdmin);
      setCurrentUsername(data.me.username);
    }
  }, [data]);

  console.log(token);
  console.log('@@@ isAdmin: ', isAdmin);
  console.log('##333 data: ', data);
  console.log('!@!@! currentUsername: ', currentUsername);

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        token,
        currentUsername,
        setToken,
        setIsAdmin,
        setCurrentUsername,
      }}
    >
      <Router>
        <StoreProvider>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/logout" component={Logout} />
            {/* donate page  */}
            {/* <Route exact path="/donate" component={Donate} /> */}
            {/* <Route exact path="/success" component={Success} /> */}
            <Route path="/single-dog/:id" component={SingleDog} />
            <Route exact path="/add-dog" component={AdminAddDog} />
            <Route exact path="/view-users" component={ViewUsers} />

            <Route exact path="/donate" component={Donate} />
          </Switch>
          <Footer />
        </StoreProvider>
      </Router>
    </AuthContext.Provider>
  );
}

export default AuthenticationGuard;
