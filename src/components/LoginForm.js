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
      e.target.setCustomValidity(
        e.target.value === ""
          ? "Enter your username here."
          : "The username must be at least 3 characters long."
      );
    }
  };

  const handlePwInvalid = (e) => {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity(
        e.target.value === ""
          ? "Enter your password here."
          : "The password must consist of at least 8 characters, at least one uppercase letter, one lowercase letter and one number."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5000/pokedex/api/auth/login",
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
          minLength="3"
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
          // pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}"
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
