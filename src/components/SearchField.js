import React, { useState } from "react";
import PokemonList from "./PokemonList";

function SearchField(props) {
  const [results, setResults] = useState([]);

  const onChange = (e)=> {
    if (e.target.value === "") {
      setResults([]);
    } else {
      setResults(props.pokemons.filter((pokemon) => pokemon.name.includes(e.target.value.toLowerCase())));
    }
  }
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Who's that Pokémon?"
          onChange={onChange}
        />
      </div>
      <PokemonList pokemons={results}/>
    </div>
  );
}


export default SearchField;
