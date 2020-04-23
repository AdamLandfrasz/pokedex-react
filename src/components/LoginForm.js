import React, { useState, useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import axios from "axios";
import { Cookies } from "react-cookie";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setModalShow] = useContext(ModalContext);

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
    const result = await axios.post(
      "http://localhost:5000/pokedex/api/auth/login",
      {
        username,
        password,
      }
    );

    if (result.data.success) {
      console.log(result.headers);
      const cookies = new Cookies();
      cookies.set("auth-token", result.headers["auth-token"]);
      console.log(cookies.getAll());
      setModalShow(false);
    }
  };

  return (
    <div className="form">
      <h4 className="form-header">Sign in</h4>
      <form action="" onSubmit={handleSubmit} className="form-body">
        <input
          autoComplete="disabled"
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
          pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}"
          required
          onInvalid={handlePwInvalid}
          onInput={handlePwInvalid}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
}

export default LoginForm;
