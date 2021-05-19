import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';


import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashBoard';
import LoginSignup from './pages/Login';
import SingleDog from './pages/SingleDog';
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

// redux //
import { Provider } from 'react-redux';
<<<<<<< HEAD
import store from './utils/store';
=======
// import store from './utils/store';
>>>>>>> 1ccff4cb6b376eaeaf215d2311c13511a84a7ea7
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
          <div>
<<<<<<< HEAD
            <Provider store={store}> 
=======
            {/* <Provider store={store}>  */}
>>>>>>> 1ccff4cb6b376eaeaf215d2311c13511a84a7ea7
            <Navigation />
            <Switch>
              <Route path="/" component={Homepage} />
          {/* <Route path="/dashboard" component={Dashboard} />
              <Route path="/admin" component={AdminDashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route path="/single-dog/:id" component={SingleDog} /> */}
          <Footer />
        </Switch>
<<<<<<< HEAD
        </Provider>
=======
        {/* </Provider> */}
>>>>>>> 1ccff4cb6b376eaeaf215d2311c13511a84a7ea7
      </div>
    </Router>
  </ApolloProvider>
    
  );
}

export default App;
