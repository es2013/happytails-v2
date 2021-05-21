import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';


import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleDog from './pages/SingleDog';
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

// redux //
import { Provider } from 'react-redux';
// import store from './utils/store';
// import Success from "./pages/Success";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (

    <ApolloProvider client={client}>
      <Router >
          {/* <Provider store={store}>  */}
          <Navigation />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/dashboard" component={Dashboard} />
            {/* <Route path="/admin" component={AdminDashboard} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/success" component={Success} /> */}

            {/* this is the path I had earlier. I think it is a more appropriate endpoint but it doesnt matter just lets get the singleDog page to load*/}
            <Route path="/single-dog/:id" component={SingleDog} />
            {/* this is the path that that currently renders when select button is clicked.  */}
            {/* <Route path="/dashboard/edit/:id" component={SingleDog} /> */}

            {/* footer only loading on logout page?? */}
          </Switch>
          <Footer />
          {/* </Provider> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
