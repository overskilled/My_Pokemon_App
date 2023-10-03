import React from 'react';
import { Navbar, Container } from "react-bootstrap";
import "./NavbarTool.css"
import pokedeximage from "../images/pokedex.png"
// components
import Searchbar from "./Searchbar";

const NavbarTool = () => {
  return (
    <Navbar bg="danger" expand="xl" variant="dark" className="navbar-custom navbar-expand-md">
      <Container >
        <Navbar.Brand className="text-secondary" href="/"><img src={pokedeximage} alt="pokedex" width={150} height={60} /> </Navbar.Brand>
        <Searchbar />
      </Container>
    </Navbar>
  );
};

export default NavbarTool;
