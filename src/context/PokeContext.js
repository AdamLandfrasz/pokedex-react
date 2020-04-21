import React, { useState, createContext } from "react";

export const PokeContext = createContext();

export function PokeProvider(props) {
  const [caughtPokemons, setCaughtPokemons] = useState([]);

  const addCaughtPokemon = (newPokemon) => {
    if (caughtPokemons.includes(newPokemon)) return;
    setCaughtPokemons([...caughtPokemons, newPokemon]);
  };

  return (
    <PokeContext.Provider value={[caughtPokemons, addCaughtPokemon]}>
      {props.children}
    </PokeContext.Provider>
  );
}
