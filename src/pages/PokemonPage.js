import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container, Button, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import changeColor from '../components/PokemonColor';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const getPokemonData = async (id) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return res.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const details = await getPokemonData(id);
      setPokemonDetails(details);
    };
    fetchPokemon();
  }, [id]);

  const getColor = () => {
    if (pokemonDetails && pokemonDetails.types && pokemonDetails.types.length > 0) {
      return changeColor(pokemonDetails.types[0].type.name);
    }
    return 'white';
  };



  const color = getColor();
  const progressBarVariants = ['success', 'info', 'warning', 'danger'];

  return (
    <Container className="my-5">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Link to="/">
            <Button variant="danger">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-return-left"
                viewBox="0 0 16 16"
                >
                <path
                    fillRule="evenodd"
                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                />
                </svg>{' '}
                BACK
            </Button>
        </Link>
            <h1 style={{ color, fontSize: '2rem', marginTop: '1rem' }}>
                {pokemonDetails && pokemonDetails.name
                ? pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)
                : ''}
            </h1>
        </div>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
            className="my-3 p-2 rounded text-center shadow p-3 mb-5 bg-white"
            style={{
                border: 'none',
                width: '100%',
            }}
            >
            <div style={{ backgroundColor: color }}>
                <Link to={`/pokemon/${pokemonDetails?.id}`}>
                <Card.Img
                    style={{ width: '20rem', maxWidth: '25rem', height: 'auto' }} 
                    src={pokemonDetails?.sprites?.other['official-artwork']?.front_default}
                    variant="top"
                />
                </Link>
            </div>
        </Card>

        </Col>
        <Row>
            <Col>

            <Card className="my-3 p-2 rounded text-center shadow p-3 mb-5 bg-white" style={{ display: 'flex', flexDirection: 'column', backgroundColor: color }}>
            <div style={{ backgroundColor: color }}>
            <div className="d-inline p-2 text-dark text-center"><b>Abilities:</b></div>
            <div className="d-inline p-2 text-dark text-center">
                {pokemonDetails?.abilities.map((type, index) => (
                <span key={type.ability.name}>
                    {index > 0 && ', '}
                    {type.ability.name}
                </span>
                ))}
            </div></div>
            </Card>

            <Card>
            <Table striped bordered hover variant="white">
                    <thead>
                        <tr>
                        <th><b>About</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Base experience</td>
                            <td>{pokemonDetails?.base_experience}</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>{pokemonDetails?.height}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{pokemonDetails?.weight}</td>
                        </tr>
                    </tbody>
                    </Table>
            </Card>

            </Col>

            <Col>
                <Card>
                    <Table striped bordered hover variant="white">
                    <thead>
                        <tr>
                        <th><b>Stats</b></th>
                        <th><b>Value</b></th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                pokemonDetails?.stats.map((stat, index) => (
                                  <tr key={index}>
                                    <td><b>{stat.stat.name} :</b></td>
                                    <td>
                                      <ProgressBar
                                        animated
                                        variant={progressBarVariants[index % progressBarVariants.length]}
                                        now={stat.base_stat}
                                        label={stat.base_stat}
                                      />
                                    </td>
                                  </tr>
                                ))
                            }

                    </tbody>
                    </Table>
                </Card>
            </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default PokemonPage;
