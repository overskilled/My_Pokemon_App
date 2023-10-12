import React from 'react';
import { Navbar, Container } from "react-bootstrap";
import "./NavbarTool.css"
import pokedeximage from "../images/pokedex.png"
import { Card } from "react-bootstrap";
import {  Link } from "react-router-dom";
// components
import Searchbar from "./Searchbar";
import searchPokemon from '../services/searchPokemon';

const NavbarTool = () => {

  const [pokemon, setPokemon] = React.useState('')

  const getPokemon = async (query) => {
    const response = await searchPokemon(query);
    const results = await response.json();
    setPokemon(results)
    console.log(results)
  }

  return (
    <Navbar bg="danger" expand="xl" variant="dark" className="navbar-custom navbar-expand-md">
      <Container >
        <Navbar.Brand className="text-secondary" href="/"><img src={pokedeximage} alt="pokedex" width={150} height={60} /> </Navbar.Brand>
        <div>
          <div>
            <Searchbar getPokemon={getPokemon} />
          </div>
          <div>
          {pokemon ? (
            <Card>
              <Link to={`/pokemon/${pokemon.id}`}>
                <strong>
                  <p style={{ color: "black", textDecoration: "none" }}>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                  </p>
                </strong>
              </Link>
            </Card>
          ) : null}

          </div>
        </div>

      </Container>
    </Navbar>
  );
};

export default NavbarTool;
