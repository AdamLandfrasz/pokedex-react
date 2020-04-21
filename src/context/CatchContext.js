import React, { useState, createContext } from "react";

export const CatchContext = createContext();

export function CatchProvider(props) {
  const [caughtPokemons, setCaughtPokemons] = useState([]);

  const addCaughtPokemon = (newPokemon) => {
    if (caughtPokemons.includes(newPokemon)) return;
    setCaughtPokemons([...caughtPokemons, newPokemon]);
  };

  return (
    <CatchContext.Provider value={[caughtPokemons, addCaughtPokemon]}>
      {props.children}
    </CatchContext.Provider>
  );
}
