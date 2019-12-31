import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-warning  px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand"></img>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
