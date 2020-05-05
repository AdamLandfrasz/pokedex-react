import React, { useState, useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { TypeContext } from "../context/TypeContext";

import PokemonList from "./PokemonList";
import TypesList from "./TypesList";

function SearchField() {
  const [selectedTypes] = useContext(TypeContext);

  const pokemons = useContext(PokemonContext);
  const [results, setResults] = useState([]);

  useEffect(() => setResults(pokemons), [pokemons]);

  const onChange = (e) => {
    if (e.target.value === "") {
      setResults(pokemons);
    } else {
      setResults(
        pokemons.filter((pokemon) =>
          pokemon.name.includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Who's that Pokémon?"
          onChange={onChange}
        />
        <TypesList />
      </div>
      <PokemonList pokemons={results} />
    </div>
  );
}

export default SearchField;
