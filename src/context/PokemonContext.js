import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export function PokemonProvider(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=251")
      .catch(() => console.log("Failed to load the data"))
      .then((res) => {
        setPokemons(res.data.results);
      });
  }, []);

  return (
    <PokemonContext.Provider value={pokemons}>
      {props.children}
    </PokemonContext.Provider>
  );
}
