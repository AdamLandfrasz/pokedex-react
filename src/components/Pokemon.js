import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Pokemon(props) {
  const [src, setSrc] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    let isMounted = true;
    
    axios.get(props.pokemon.url)
    .then((resp) => {
      if (isMounted) {
        setSrc(resp.data.sprites.front_default);
        setId(resp.data.id);
      }
    })
    .catch((error) => console.log(error));
    
    return () => isMounted = false;
  }, [props.pokemon]);
  
  return (
    <Link to={`/pokemon/${id}`} className="pokemon">
      <img
        style={{ width: "115px", height: "115px", margin: "1rem 2rem" }}
        src={src}
        alt="poké_image"
      />
      <div className="pokemon-name">
        <div>{props.pokemon.name}</div>
        <div>#{id}</div>
      </div>
    </Link>
  );
}

export default Pokemon;
