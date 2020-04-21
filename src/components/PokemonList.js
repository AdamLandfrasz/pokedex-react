import React from "react";
import Pokemon from "./Pokemon";
import CardContainer from "./elements/CardContainer";

function PokemonList(props) {
  return (
    <CardContainer>
      {props.pokemons.map((pokemon) => (
        <Pokemon key={props.pokemons.indexOf(pokemon)} pokemon={pokemon} />
      ))}
    </CardContainer>
  );
}

export default PokemonList;
