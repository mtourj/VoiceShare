import React from "react";

import { NavLink } from 'react-router-dom';

import Redirect from './Redirect';

import "./stylesheets/Profile.scss";

import { connect } from "react-redux";

const Profile = props => {
  
  return !props.isAuthenticated ? <Redirect history={props.history} to='/' /> : (
    <div className="profile">
      <div className="left-nav">
        <h4>{props.user.nickname}</h4>
        <h3>Profile</h3>
        <div className='navigation'>
          <NavLink to='/profile?set=general' activeClassName='selected' className='nav'>
            General
          </NavLink>
          <NavLink to='/profile?set=privacy' activeClassName='selected' className='nav'>
            Privacy
          </NavLink>
          <NavLink to='/profile?set=security' activeClassName='selected' className='nav'>
            Security
          </NavLink>
          <NavLink to='/profile?set=payments' activeClassName='selected' className='nav'>
            Payments
          </NavLink>
          <div onClick={props.logout} className='logout'>
            Log out
          </div>
        </div>
      </div>
      <div className="body"></div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  token: state.token
});

export default connect(mapStateToProps, null)(Profile);
