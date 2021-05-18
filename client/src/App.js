import React from "react";
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashBoard';
import LoginSignup from './pages/LoginSignup';
import SingleDog from './pages/SingleDog';
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (

    <div className="App">
      {/* set up react-router just like in porfolio */}
      <Router >
        <Navigation />
        <h2>Hello Folks!</h2>
        {/* <Route path="/" component={Homepage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/login-signup" component={LoginSignup} />
        <Route path="/single-dog" component={SingleDog} /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
