import React, { useState, useEffect, useContext, createContext } from "react";
import { UserContext } from "../context/UserContext";
import dbManager from "../db/dbManager";

export const CatchContext = createContext();

export function CatchProvider(props) {
  const [caughtPokemons, setCaughtPokemons] = useState([]);
  const [user] = useContext(UserContext);

  useEffect(() => {
    if (!user) return setCaughtPokemons([]);
    dbManager.getAllCaughtPokemon((data) => setCaughtPokemons(data));
  }, [user]);

  const addCaughtPokemon = (newPokemon) => {
    if (!user) return;
    if (!caughtPokemons.includes(newPokemon)) {
      const updatedPokemon = [...caughtPokemons, newPokemon];
      setCaughtPokemons(updatedPokemon);
      dbManager.updateCaughtPokemon(updatedPokemon);
    }
  };

  return (
    <CatchContext.Provider value={[caughtPokemons, addCaughtPokemon]}>
      {props.children}
    </CatchContext.Provider>
  );
}
