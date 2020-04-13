import React from "react";
import { Link } from "react-router-dom";
import PokemonImg from "./PokemonImg";

class Pokemon extends React.Component {
  render() {
    const { name, url } = this.props.pokemon;

    return (
      <div className="pokemon">
        <PokemonImg url={url} />
        <div className="pokemon-name">
          <Link to={url}>{name}</Link>
          <div>#{this.props.id + 1}</div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
