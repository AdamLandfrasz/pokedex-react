import React, { useContext } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { CatchContext } from "./context/CatchContext";
import { PokemonProvider } from "./context/PokemonContext";
import { ModalProvider } from "./context/ModalContext";

import Navbar from "./components/layout/Navbar";
import Modal from "./components/layout/Modal";
import SearchField from "./components/SearchField";
import PokemonList from "./components/PokemonList";
import TypesList from "./components/TypesList";
import PokemonDetails from "./components/PokemonDetails";
import LoginForm from "./components/LoginForm";

import "./App.css";

function App() {
  const [caughtPokemons] = useContext(CatchContext);

  return (
    <Router>
      <div className="App">
        <ModalProvider>
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
          <Modal>
            <LoginForm />
          </Modal>
        </ModalProvider>
      </div>
    </Router>
  );
}

export default App;
