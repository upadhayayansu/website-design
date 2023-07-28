import React, { Component } from "react";
import Logo from "../assets/pizzaLogo.jpg";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="leftSide"></div>
        <img src={Logo} />
        <div className="rightSide"></div>
      </div>
    );
  }
}

export default Navbar;
