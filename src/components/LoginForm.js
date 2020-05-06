import React, { useState, useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";
import axios from "axios";

import Spinner from "./layout/Spinner";
import FormMessage from "./layout/FormMessage";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalid, setInvalid] = useState({ isInvalid: false, message: "" });
  const modalContext = useContext(ModalContext);
  const [, setUser] = useContext(UserContext);

  const handleUsernameInvalid = (e) => {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity("Enter your username here.");
    }
  };

  const handlePwInvalid = (e) => {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity("Enter your password here.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://pokedex-express.herokuapp.com/pokedex/api/auth/login",
        { username, password },
        { withCredentials: true }
      );
      setIsLoading(false);

      if (response.data.success) {
        setUser(username);
        modalContext.hideModal();
      } else {
        setInvalid({
          isInvalid: true,
          message: response.data.message,
        });
      }
    } catch (err) {
      setIsLoading(false);
      setInvalid({
        isInvalid: true,
        message: "Something went wrong! Please try again later!",
      });
    }
  };

  return (
    <div className="form">
      <h4 className="form-header">Sign in</h4>
      <form action="" onSubmit={handleSubmit} className="form-body">
        {invalid.isInvalid ? <FormMessage message={invalid.message} /> : null}
        <input
          autoComplete="off"
          type="text"
          name="username"
          id="login-username"
          placeholder="Username"
          required
          onInvalid={handleUsernameInvalid}
          onInput={handleUsernameInvalid}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="Password"
          required
          onInvalid={handlePwInvalid}
          onInput={handlePwInvalid}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLoading ? <Spinner /> : <button type="submit">SIGN IN</button>}
      </form>
    </div>
  );
}

export default LoginForm;
