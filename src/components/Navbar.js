import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-warning  px-sm-5">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img src={logo} alt="store" className="navbar-brand"></img>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to={process.env.PUBLIC_URL + "/"} className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to={process.env.PUBLIC_URL + "/cart"} className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--lightBlue) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
