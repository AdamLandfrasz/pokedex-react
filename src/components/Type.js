import React from "react";

function Type(props) {
  const style = {
    backgroundColor: colors[props.type],
    fontSize: "13px",
    borderRadius: "10px",
    textAlign: "center",
    padding: "5px",
    margin: "5px 0 5px 3px",
    width: "100px",
  }
  
  return (
    <section style={style}>{props.type.toUpperCase()}</section>
  );
}

const colors = {    
  normal: "#c2c2c2",
  grass: "#50f73e",
  fire: "#ff2121",
  water: "#408cff",
  fighting: "#bd4646",
  flying: "#9aabdb",
  poison: "#c565eb",
  ground: "#ebe065",
  rock: "#dbc18c",
  bug: "#d4e34d",
  ghost: "#8e4de3",
  electric: "#fffc36",
  psychic: "#ff2bc7",
  ice: "#6afcf5",
  dragon: "#8457ff",
  dark: "#4d2d2d",
  steel: "#c4c6ff",
  fairy: "#ffc4f5",
};

export default Type;
