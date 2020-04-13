import React, { Component } from "react";

export class Type extends Component {
  getStyle() {
    let color = "";
    switch (this.props.type) {
      case "normal":
        color = "#c2c2c2";
        break;
      case "grass":
        color = "#50f73e";
        break;
      case "fire":
        color = "#ff2121";
        break;
      case "water":
        color = "#408cff";
        break;
      case "fighting":
        color = "#bd4646";
        break;
      case "flying":
        color = "#9aabdb";
        break;
      case "poison":
        color = "#c565eb";
        break;
      case "ground":
        color = "#ebe065";
        break;
      case "rock":
        color = "#dbc18c";
        break;
      case "bug":
        color = "#d4e34d";
        break;
      case "ghost":
        color = "#8e4de3";
        break;
      case "electric":
        color = "#fffc36";
        break;
      case "psychic":
        color = "#ff2bc7";
        break;
      case "ice":
        color = "#6afcf5";
        break;
      case "dragon":
        color = "#8457ff";
        break;
      case "dark":
        color = "#4d2d2d";
        break;
      case "steel":
        color = "#c4c6ff";
        break;
      case "fairy":
        color = "#ffc4f5";
        break;
      default:
    }
    return {
      backgroundColor: color,
      fontSize: "13px",
      borderRadius: "10px",
      textAlign: "center",
      padding: "5px",
      margin: "5px 0 5px 3px",
      width: "100px",
    };
  }
  render() {
    return (
      <section style={this.getStyle()}>{this.props.type.toUpperCase()}</section>
    );
  }
}

export default Type;
