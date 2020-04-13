import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <h1>PokéApp</h1>
      <Link style={linkStyle} to="/pokemons">
        Pokemons
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/types">
        Types
      </Link>
    </nav>
  );
}

const navStyle = {
  background: "#ff3838",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
};

export default Navbar;
