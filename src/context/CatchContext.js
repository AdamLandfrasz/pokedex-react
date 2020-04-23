import React, { useState, useEffect, createContext } from "react";
import dbManager from "../db/dbManager";

export const CatchContext = createContext();

export function CatchProvider(props) {
  const [caughtPokemons, setCaughtPokemons] = useState([]);

  useEffect(() => {
    dbManager.getAllCaughtPokemon("adaom", (data) => setCaughtPokemons(data));
  }, []);

  const addCaughtPokemon = (newPokemon) => {
    if (!caughtPokemons.includes(newPokemon)) {
      const updatedPokemon = [...caughtPokemons, newPokemon];
      setCaughtPokemons(updatedPokemon);
      dbManager.updateCaughtPokemon("adaom", updatedPokemon);
    }
  };

  return (
    <CatchContext.Provider value={[caughtPokemons, addCaughtPokemon]}>
      {props.children}
    </CatchContext.Provider>
  );
}
