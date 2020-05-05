import React, { useContext } from "react";
import { TypeContext } from "../context/TypeContext";

function Type(props) {
  const [selectedTypes] = useContext(TypeContext);

  const style = {
    backgroundColor: colors[props.type.name],
    fontSize: "13px",
    borderRadius: "10px",
    textAlign: "center",
    padding: "5px",
    margin: "5px 0 5px 3px",
    width: "100px",
    filter: props.active
      ? props.selected
        ? "grayscale(0%)"
        : "grayscale(90%)"
      : "grayscale(0%)",
    border: props.active
      ? props.selected
        ? "2px inset"
        : "2px outset"
      : "none",
    transition: "200ms",
  };

  const toggleTypeSelect = (type) => {
    if (selectedTypes.selectedTypes.includes(type)) {
      selectedTypes.setSelectedTypes(
        selectedTypes.selectedTypes.filter(
          (selected) => selected.name !== type.name
        )
      );
    } else {
      selectedTypes.setSelectedTypes([...selectedTypes.selectedTypes, type]);
    }
  };

  return (
    <section
      style={style}
      onClick={props.active ? toggleTypeSelect.bind(this, props.type) : null}
    >
      {props.type.name.toUpperCase()}
    </section>
  );
}

const colors = {
  normal: "#baba9c",
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
  dark: "#7d5050",
  steel: "#c4c6ff",
  fairy: "#ffc4f5",
};

export default Type;
