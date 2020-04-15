import React, { Component } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

export class SearchField extends Component {
  state = {
    pokemons: [],
    results: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) =>
      this.setState({
        pokemons: res.data.results,
        results: [...this.state.results],
      })
    );
  }

  onChange(e) {
    if (e.target.value === "") {
      this.setState({
        pokemons: [...this.state.pokemons],
        results: [],
      });
    } else {
      this.setState({
        pokemons: [...this.state.pokemons],
        results: this.state.pokemons.filter((pokemon) =>
          pokemon.name.includes(e.target.value.toLowerCase())
        ),
      });
    }
  }

  render() {
    return (
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="Who's that Pokémon?"
            onChange={this.onChange.bind(this)}
          />
        </div>
        <div className="poke-container">
          {this.state.results.map((pokemon) => (
            <Pokemon
              key={this.state.results.indexOf(pokemon)}
              pokemon={pokemon}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchField;
