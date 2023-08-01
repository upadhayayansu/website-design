import React, { Component } from "react";
import Logo from "../assets/pizzaLogo.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="leftSide"></div>
        <img src={Logo} />
        <div className="rightSide">
          <Link to="/home">Home </Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
