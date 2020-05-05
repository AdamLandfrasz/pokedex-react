import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CatchContext } from "../context/CatchContext";
import { TypeContext } from "../context/TypeContext";

import Card from "./elements/Card";

function Pokemon(props) {
  const [caughtPokemons, addCaughtPokemon] = useContext(CatchContext);
  const [selectedTypes] = useContext(TypeContext);

  const [src, setSrc] = useState("");
  const [id, setId] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    let isMounted = true;

    axios
      .get(props.pokemon.url)
      .then((resp) => {
        if (isMounted) {
          setSrc(resp.data.sprites.front_default);
          setId(resp.data.id);
          setTypes(resp.data.types);
        }
      })
      .catch((error) => console.log(error));

    return () => (isMounted = false);
  }, [props.pokemon]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    addCaughtPokemon(props.pokemon);
  };

  return selectedTypes.selectedTypes.every((type) =>
    types.map((t) => t.type.name).includes(type.name)
  ) ||
    selectedTypes.selectedTypes.length === 0 ||
    !props.typeFiltered ? (
    <Card
      caught={caughtPokemons.some((poke) => poke.name === props.pokemon.name)}
    >
      <Link to={`/pokemon/${id}`} className="pokemon">
        <img src={src} alt="poké_image" />
        <div className="pokemon-name">
          <span style={{ lineHeight: 2 }}>
            #{id} {props.pokemon.name}
          </span>
          <img
            src="./logo96.png"
            alt="catch"
            height="30px"
            onClick={
              caughtPokemons.some((poke) => poke.name === props.pokemon.name)
                ? (e) => e.preventDefault()
                : handleAddEvent
            }
          />
        </div>
      </Link>
    </Card>
  ) : null;
}

export default Pokemon;
