import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios
      .get("http://localhost:5000/pokedex/api/auth/validate", {
        withCredentials: true,
      })
      .then((resp) => setUser(resp.data.username))
      .catch((err) => setUser(undefined));
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
