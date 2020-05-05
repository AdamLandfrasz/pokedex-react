import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TypeContext = createContext();

export function TypeProvider(props) {
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type?limit=18")
      .then((res) => setTypes(res.data.results));
  }, []);

  return (
    <TypeContext.Provider value={[{ selectedTypes, setSelectedTypes }, types]}>
      {props.children}
    </TypeContext.Provider>
  );
}
