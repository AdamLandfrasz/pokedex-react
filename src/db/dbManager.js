import axios from "axios";

export default {
  getAllCaughtPokemon: (username, callback) => {
    axios
      .get(
        `http://localhost:5000/pokedex/api/caught-pokemon?user=${username}`,
        { withCredentials: true }
      )
      .then((res) => callback(res.data.pokemonCaught));
  },

  updateCaughtPokemon: (username, data) => {
    axios.put(
      `http://localhost:5000/pokedex/api/caught-pokemon?user=${username}`,
      {
        pokemonCaught: data,
      }
    );
  },
};
