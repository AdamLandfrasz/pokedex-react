import React, { Component } from "react";
import axios from "axios";
import Type from "./Type";

export class PokemonDetails extends Component {
  state = {
    pokemon: { id: 0, name: "", types: [], height: "", weight: "", imgSrc: "" },
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
      .then((res) =>
        this.setState({
          pokemon: {
            id: res.data.id,
            name: res.data.name,
            types: res.data.types.map((type) => type.type.name),
            height: res.data.height,
            weight: res.data.weight,
            imgSrc: res.data.sprites.front_default,
          },
        })
      );
  }

  render() {
    return (
      <div className="details">
        <img
          style={{ width: "130px", height: "130px", margin: "1rem 2rem" }}
          src={this.state.pokemon.imgSrc}
          alt="poké_image"
        />
        <div className="details-text">
          <div>
            <span>No.{this.state.pokemon.id}</span>
            <span>{this.state.pokemon.name}</span>
          </div>
          <div>
            <span>TYPE</span>
            <span style={{ display: "flex" }}>
              {this.state.pokemon.types.map((type) => (
                <Type type={type} />
              ))}
            </span>
          </div>
          <div>
            <span>HEIGHT</span>
            <span>{this.state.pokemon.height / 10} meters</span>
          </div>
          <div>
            <span>WEIGHT</span>
            <span>{this.state.pokemon.weight / 10} kgs</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
