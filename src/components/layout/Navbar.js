import React from "react";
import { Link } from "react-router-dom";
import Nav from "../elements/Nav";

function Navbar() {
  return (
    <Nav>
      <li>
        <Link to="/">My Pokemons</Link>
      </li>
      <li>
        <Link to="/types">Types</Link>
      </li>
      <li style={{ float: "right" }}>
        <Link to="/" style={{ lineHeight: "0" }}>
          <img src="../logo96.png" alt="nav-icon" />
        </Link>
      </li>
    </Nav>
  );
}

export default Navbar;
