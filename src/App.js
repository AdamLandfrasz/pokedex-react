import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Pokemons from "./components/Pokemons";
import Types from "./components/Types";
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
                  <Pokemons />
                </div>
              )}
            />
            <Route path="/types" component={Types} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
