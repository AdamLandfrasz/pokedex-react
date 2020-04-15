import React, { useState, useEffect } from "react";
import axios from "axios";
import Type from "./Type";

function TypesList() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type?limit=18")
      .then((res) => setTypes(res.data.results));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      {types.map((type) => (
        <Type key={type.name} type={type.name} />
      ))}
    </div>
  );
}

export default TypesList;
