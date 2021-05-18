import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './App.css';


import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashBoard';
import LoginSignup from './pages/LoginSignup';
import SingleDog from './pages/SingleDog';
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

// redux //
import { Provider } from 'react-redux';
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

    <div className="App">
      {/* set up react-router just like in porfolio */}
      <Router >
        <Navigation />
        <Route path="/" component={Homepage} />
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/login-signup" component={LoginSignup} />
        <Route path="/single-dog/:id" component={SingleDog} /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
