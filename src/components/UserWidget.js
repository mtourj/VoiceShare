import React from "react";

import { NavLink } from "react-router-dom";

const UserWidget = ({ user }) => {
  return (
    <NavLink className="username" activeClassName="selected" to="/profile">
      {user.nickname}
      <img className="avatar" src={user.picture} alt={user.nickname} />
    </NavLink>
  );
};

export default UserWidget;
