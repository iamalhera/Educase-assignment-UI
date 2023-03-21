import React from 'react';
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="component-header flex-column-center">
        <div className="img-container">
        <img src={logo} alt="Component Logo" className="img-responsive"/>
        </div>
        <h1 className="center-text">Educase is a one-stop solution to all the additional resources that a school/ preschool need.</h1>
    </div>
  )
}

export default Header