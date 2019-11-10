import React from 'react';

import './stylesheets/Navbar.scss';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <h3>VoiceShare</h3>
      </div>
      <div className='right'>
        <NavLink exact activeClassName='selected' to="/">HOME</NavLink>
        <NavLink activeClassName='selected' to="/login">LOGIN</NavLink>
      </div>
    </div>
  );
};

export default Navbar;