import React, { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import OAuthRedirect from "./components/OAuthRedirect";
import Profile from "./components/Profile";

import { Route } from "react-router-dom";

import { useAuth0 } from "./react-auth0-spa";

import { connect } from "react-redux";

import { setToken, setUser, login } from "./actions";

function App(props) {
  const { isAuthenticated, loading, user, token, logout } = useAuth0();

  const testPosts = [
    {
      id: 1,
      name: 'Post 1',
      description: 'This is a description and its brief',
      author: 'Mohammad Tourjoman',
      price: 89.99,
      rating: 4.6,
      images: [
        'data:image/jpeg;base64,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'
      ]
    },
    {
      id: 2,
      name: 'Post 2',
      description: 'This is a description and its brief',
      author: 'Mohammad Tourjoman',
      price: 89.99,
      rating: 4.6,
      images: [
        'data:image/jpeg;base64,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'
      ]
    },
    {
      id: 3,
      name: 'Post 3',
      description: 'This is a description and its brief',
      author: 'Mohammad Tourjoman',
      price: 89.99,
      rating: 4.6,
      images: [
        'data:image/jpeg;base64,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'
      ]
    },
    
  ]

  const start = () => {
    if (token && token !== props.token) {
      setToken(token);
    }

    if (user && user !== props.user) {
      props.setUser(user);
    } else if (localStorage.getItem("user")) {
      const newUser = JSON.parse(localStorage.getItem("user"));
      if (newUser !== props.user) 
      {
        props.setUser(newUser);
      }
    }
  };

  useEffect(start, []);

  useEffect(() => {
    if(isAuthenticated && user) {
      console.log(user);
      login(user);
    }
  }, [isAuthenticated])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" render={props => <Home isAuthenticated={isAuthenticated} {...props} posts={testPosts} />} />
      <Route exact path="/login" render={props => <Login {...props} />} />
      <Route
        exact
        path="/login/oauth"
        render={props => <OAuthRedirect {...props} />}
      />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/profile" render={props => <Profile isAuthenticated={isAuthenticated} logout={logout} {...props} />} />
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.token,
  user: state.user
});

export default connect(mapStateToProps, { setToken, setUser })(App);