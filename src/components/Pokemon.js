import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Pokemon extends React.Component {
  state = {
    src: "",
    id: "",
  };

  componentDidMount() {
    axios.get(this.props.pokemon.url).then((resp) =>
      this.setState({
        src: resp.data.sprites.front_default,
        id: resp.data.id,
      })
    );
  }
  render() {
    return (
      <Link to={`/pokemon/${this.state.id}`} className="pokemon">
        <img
          style={{ width: "115px", height: "115px", margin: "1rem 2rem" }}
          src={this.state.src}
          alt="poké_image"
        />
        <div className="pokemon-name">
          <div>{this.props.pokemon.name}</div>
          <div>#{this.state.id}</div>
        </div>
      </Link>
    );
  }
}

export default Pokemon;
