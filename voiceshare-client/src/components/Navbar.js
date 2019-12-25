import React from "react";

import "./stylesheets/Navbar.scss";

import { useAuth0 } from "../react-auth0-spa";

import { NavLink, Link } from "react-router-dom";

import UserWidget from './UserWidget';

import { connect } from "react-redux";

import { login } from "../actions";

const Navbar = props => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <h3>VoiceShare</h3>
        </Link>
      </div>
      <div className="right">
        <NavLink to='/messages' className='messages'>
          <div className='new-alert'>.</div>
          MESSAGES
        </NavLink>
        {isAuthenticated ? <UserWidget user={user} /> : <div className='login' onClick={() => loginWithRedirect()}>Log In</div>}
      </div>
    </div>
  );
};

export default connect(null, { login })(Navbar);
