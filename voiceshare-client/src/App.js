import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import OAuthRedirect from './components/OAuthRedirect';

import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/login/oauth" render ={props => <OAuthRedirect {...props} />} />
      <Route exact path="/register" render ={props => <Register {...props} />} />
    </div>
  );
}

export default App;
