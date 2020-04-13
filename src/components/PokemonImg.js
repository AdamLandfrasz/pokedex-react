import React, { Component } from "react";
import axios from "axios";

export class PokemonImg extends Component {
  state = {
    src: "",
  };

  componentDidMount() {
    axios
      .get(this.props.url)
      .then((resp) => this.setState({ src: resp.data.sprites.front_default }));
  }
  render() {
    return (
      <React.Fragment>
        <img
          style={{ width: "115px", height: "115px", margin: "1rem 2rem" }}
          src={this.state.src}
          alt="poké_image"
        />
      </React.Fragment>
    );
  }
}

export default PokemonImg;
