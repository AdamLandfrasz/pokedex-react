import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import SearchField from "./components/SearchField";
import TypesList from "./components/TypesList";
import PokemonDetails from "./components/PokemonDetails";

import "./App.css";
import { CatchProvider } from "./context/CatchContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <CatchProvider>
          <div className="container">
            <Route exact path="/" component={SearchField} />
            <Route path="/types" component={TypesList} />
            <Route path="/pokemon/:id" component={PokemonDetails} />
          </div>
        </CatchProvider>
      </div>
    </Router>
  );
}

export default App;
