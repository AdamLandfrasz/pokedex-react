import React, { Component } from "react";
import axios from "axios";

export class Types extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => this.setState({ types: res.data.results }));
  }

  render() {
    return this.state.types.map((type) => <p>{type.name}</p>);
  }
}

export default Types;
