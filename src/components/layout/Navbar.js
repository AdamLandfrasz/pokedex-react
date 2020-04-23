import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "../elements/Nav";
import NavButton from "../elements/NavButton";
import { ModalContext } from "../../context/ModalContext";

function Navbar() {
  const [, setModalShow] = useContext(ModalContext);

  const showModal = () => {
    setModalShow(true);
  };

  return (
    <Nav>
      <li className="nav-left">
        <Link to="/my_pokemon">My Pokemon</Link>
      </li>
      <li className="nav-left">
        <Link to="/types">Types</Link>
      </li>
      <li className="nav-right">
        <Link to="/" style={{ lineHeight: "0" }}>
          <img src="../logo96.png" alt="nav-icon" />
        </Link>
      </li>
      <li className="nav-right">
        <NavButton onClick={showModal}>Sign In</NavButton>
      </li>
    </Nav>
  );
}

export default Navbar;
