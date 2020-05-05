import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Type from "./Type";
import { CatchContext } from "../context/CatchContext";
import { PokemonContext } from "../context/PokemonContext";
import DetailsIcon from "./elements/DetailsIcon";

function PokemonDetails(props) {
  const [caughtPokemons, addCaughtPokemon] = useContext(CatchContext);
  const allPokemons = useContext(PokemonContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`)
      .then((res) => {
        setId(res.data.id);
        setName(res.data.name);
        setTypes(res.data.types.map((type) => type.type));
        setHeight(res.data.height);
        setWeight(res.data.weight);
        setImgSrc(res.data.sprites.front_default);
      });
  }, [props.match.params.id]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    addCaughtPokemon(allPokemons.find((pokemon) => pokemon.name === name));
  };

  return (
    <React.Fragment>
      <div className="details">
        <img
          style={{ width: "130px", height: "130px", margin: "1rem 2rem" }}
          src={imgSrc}
          alt="poké_image"
        />
        <div className="details-text">
          <div>
            <span>No.{id}</span>
            <span>{name}</span>
          </div>
          <div>
            <span>TYPE</span>
            <span style={{ display: "flex", flexDirection: "row-reverse" }}>
              {types.map((type) => (
                <Type key={types.indexOf(type)} type={type} active={false} />
              ))}
            </span>
          </div>
          <div>
            <span>HEIGHT</span>
            <span>{height / 10} meters</span>
          </div>
          <div>
            <span>WEIGHT</span>
            <span>{weight / 10} kgs</span>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "0 auto",
          width: "fit-content",
          display: "flex",
          alignItems: "center",
        }}
      >
        <DetailsIcon
          src="../logo96.png"
          alt="catch"
          height="60px"
          onClick={
            caughtPokemons.some((poke) => poke.name === name)
              ? (e) => e.preventDefault()
              : handleAddEvent
          }
          caught={caughtPokemons.some((poke) => poke.name === name)}
        />
      </div>
    </React.Fragment>
  );
}

export default PokemonDetails;
