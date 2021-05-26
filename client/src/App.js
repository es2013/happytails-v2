import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';
import { StoreProvider } from "./utils/GlobalState";

import Homepage from './pages/Homepage';
import AdminDashboard from './pages/AdminDashBoard';
import Dashboard from './pages/Dashboard';
//import AdminDashboard from './pages/AdminDashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleDog from './pages/SingleDog';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Donate from './components/Donate';
import { AuthContext } from './utils/GlobalState';
import Logout from './pages/Logout';
import AdminAddDog from './pages/AdminAddDog';


// redux //
// import { Provider } from 'react-redux';
// import store from './utils/store';
// import Success from "./pages/Success";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function App() {
  // GetUser details. Check if user is an admin. If they are set them to true with setState.
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('id_token');
    setToken(token);
  }, [token]);

  console.log(token)

  // The provider context is necessary to preserve the global state
  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider
        value={{
          isAdmin,
          token,
          setToken,
          setIsAdmin
        }}
      >
        <Router>
          {/* <Provider store={store}>  */}
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

            {/* this is the path I had earlier. I think it is a more appropriate endpoint but it doesnt matter just lets get the singleDog page to load*/}
            <Route path="/single-dog/:id" component={SingleDog} />
            {/* this is the path that that currently renders when select button is clicked.  */}
            {/* <Route path="/dashboard/edit/:id" component={SingleDog} /> */}

            {/* footer only loading on logout page?? */}
            <Route exact path="/add-dog" component={AdminAddDog} />
             

          </Switch>
          <Footer />
          </StoreProvider>
          {/* </Provider> */}
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
