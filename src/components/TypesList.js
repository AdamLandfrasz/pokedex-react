import React, { Component } from "react";
import axios from "axios";
import Type from "./Type";

export class TypesList extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/type?limit=18")
      .then((res) => this.setState({ types: res.data.results }));
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {this.state.types.map((type) => (
          <Type key={type.name} type={type.name} />
        ))}
      </div>
    );
  }
}

export default TypesList;
