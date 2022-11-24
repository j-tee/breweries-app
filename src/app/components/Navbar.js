/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const goBackHandler = (e) => {
    console.log(e.target.value);
    navigate(-1);
  };
  return (
    <nav className="container-fluid">
      <button className="nav-button" onClick={goBackHandler}>&lt;</button>
      <div className="icons">
        <span className="mic">
          <FaMicrophone />
        </span>
        <span>
          <FaRegSun />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
