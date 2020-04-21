import React from "react";
import Pokemon from "./Pokemon";

function PokemonList(props) {
  return (
    <div className="poke-container">
      {props.pokemons.map((pokemon) => (
        <Pokemon key={props.pokemons.indexOf(pokemon)} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
