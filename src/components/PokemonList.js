import React from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

class PokemonList extends React.Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => this.setState({ pokemons: res.data.results }));
  }

  render() {
    return this.state.pokemons.map((pokemon) => (
      <Pokemon key={this.state.pokemons.indexOf(pokemon)} pokemon={pokemon} />
    ));
  }
}

export default PokemonList;
