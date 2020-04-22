import axios from "axios";

export default {
  getAllCaughtPokemon: (callback) => {
    axios
      .get("http://localhost:5000/pokedex/api/caught-pokemon")
      .then((res) => callback(res.data.pokemonCaught));
  },

  updateCaughtPokemon: (data) => {
    axios.put("http://localhost:5000/pokedex/api/caught-pokemon", {
      pokemonCaught: data,
    });
  },
};
