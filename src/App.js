import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import SearchField from "./components/SearchField";
import TypesList from "./components/TypesList";
import PokemonDetails from "./components/PokemonDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" component={SearchField} />
          <Route path="/types" component={TypesList} />
          <Route path="/pokemon/:id" component={PokemonDetails} />
        </div>
      </div>
    </Router>
  );
}

export default App;
