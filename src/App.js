import React from "react";
import './App.css';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";

//Components


function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/pokemon/:id" element={<PokemonPage />}/>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
