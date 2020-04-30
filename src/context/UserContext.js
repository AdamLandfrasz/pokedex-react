import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios
      .get("https://pokedex-express.herokuapp.com/pokedex/api/auth/validate", {
        withCredentials: true,
      })
      .then((resp) => {
        setUser(resp.data.username);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
