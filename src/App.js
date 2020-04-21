import React, { useContext } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SearchField from "./components/SearchField";
import PokemonList from "./components/PokemonList";
import TypesList from "./components/TypesList";
import PokemonDetails from "./components/PokemonDetails";
import { CatchContext } from "./context/CatchContext";
import { PokemonProvider } from "./context/PokemonContext";
import "./App.css";

function App() {
  const [caughtPokemons] = useContext(CatchContext);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <PokemonProvider>
            <Route exact path="/" component={SearchField} />
            <Route
              exact
              path="/my_pokemon"
              render={(props) => <PokemonList pokemons={caughtPokemons} />}
            />
            <Route path="/types" component={TypesList} />
            <Route path="/pokemon/:id" component={PokemonDetails} />
          </PokemonProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
