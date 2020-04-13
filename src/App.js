import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/PokemonList";
import TypesList from "./components/TypesList";
import PokemonDetails from "./components/PokemonDetails";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route
              path="/pokemons"
              render={(props) => (
                <div className="poke-container">
                  <PokemonList />
                </div>
              )}
            />
            <Route path="/types" component={TypesList} />
            <Route path="/pokemon/:id" component={PokemonDetails} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
