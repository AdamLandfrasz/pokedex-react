import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";

function SearchField(props) {
  const [pokemons, setPokemons] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => {
        setPokemons(res.data.results);
        setResults(res.data.results);
      })
      .catch(() => console.log("Failed to load the data"));
  }, []);

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
      </div>
      <PokemonList pokemons={results} />
    </div>
  );
}

export default SearchField;
