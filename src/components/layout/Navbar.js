import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "../elements/Nav";
import NavButton from "../elements/NavButton";
import { ModalContext } from "../../context/ModalContext";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

function Navbar() {
  const modalContext = useContext(ModalContext);
  const [user, setUser] = useContext(UserContext);

  const logOut = async () => {
    const response = await axios.get(
      "https://pokedex-express.herokuapp.com/pokedex/api/auth/logout",
      {
        withCredentials: true,
      }
    );

    if (response.data.success) {
      setUser(undefined);
    }
  };

  return (
    <Nav>
      <li className="nav-left">
        <Link to="/" style={{ lineHeight: "0" }}>
          <img src="../logo96.png" alt="nav-icon" />
        </Link>
      </li>
      {user ? (
        <li className="nav-left">
          <Link to="/my_pokemon">My Pokemon</Link>
        </li>
      ) : null}
      {user ? (
        <li className="nav-right">
          <NavButton onClick={logOut}>Log out</NavButton>
        </li>
      ) : (
        <React.Fragment>
          <li className="nav-right">
            <NavButton onClick={modalContext.showLoginModal}>Sign In</NavButton>
          </li>
          <li className="nav-right">
            <NavButton onClick={modalContext.showRegisterModal}>
              Register
            </NavButton>
          </li>
        </React.Fragment>
      )}
    </Nav>
  );
}

export default Navbar;
