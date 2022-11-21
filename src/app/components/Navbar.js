/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();

  return (
    <nav className="container-fluid">
      <button className="nav-button" onClick={() => history.goBack()}>&lt;</button>
    </nav>
  );
};

export default Navbar;
