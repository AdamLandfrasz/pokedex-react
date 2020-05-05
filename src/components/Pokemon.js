import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CatchContext } from "../context/CatchContext";

import Card from "./elements/Card";

function Pokemon(props) {
  const [caughtPokemons, addCaughtPokemon] = useContext(CatchContext);
  const [src, setSrc] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    let isMounted = true;

    axios
      .get(props.pokemon.url)
      .then((resp) => {
        if (isMounted) {
          setSrc(resp.data.sprites.front_default);
          setId(resp.data.id);
        }
      })
      .catch((error) => console.log(error));

    return () => (isMounted = false);
  }, [props.pokemon]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    addCaughtPokemon(props.pokemon);
  };

  return (
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
  );
}

export default Pokemon;
