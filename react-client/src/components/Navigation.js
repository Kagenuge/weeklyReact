import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="active">Diary</NavLink>
      <br />
      <NavLink to="/add" activeClassName="active">Make a Post</NavLink>
      <hr />
    </div>
  )
};

export default Navigation;