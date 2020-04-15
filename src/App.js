import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";  

import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypesList from "./components/TypesList";
import PokemonDetails from "./components/PokemonDetails";
import SearchField from "./components/SearchField";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) =>
    setPokemons(res.data.results)
  )}, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/" render={props=><SearchField pokemons={pokemons}/>} />
          <Route path="/pokemons" render={props=><PokemonList pokemons={pokemons}/>} />
          <Route path="/types" component={TypesList} />
          <Route path="/pokemon/:id" component={PokemonDetails} />
        </div>
      </div>
    </Router>
  );
}

export default App;
