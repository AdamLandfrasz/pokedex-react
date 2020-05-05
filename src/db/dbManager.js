import axios from "axios";

export default {
  getAllCaughtPokemon: (callback) => {
    axios
      .get("https://pokedex-express.herokuapp.com/pokedex/api/caught-pokemon", {
        withCredentials: true,
      })
      .then((res) => callback(res.data.pokemonCaught));
  },

  updateCaughtPokemon: (data) => {
    axios.put(
      "https://pokedex-express.herokuapp.com/pokedex/api/caught-pokemon",
      {
        pokemonCaught: data,
      },
      { withCredentials: true }
    );
  },
};
