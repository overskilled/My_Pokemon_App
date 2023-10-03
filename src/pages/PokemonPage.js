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
            <Button variant="danger">BACK</Button>
            <h1 style={{ color, fontSize: '2rem', marginTop: '1rem' }}>
                {pokemonDetails && pokemonDetails.name
                ? pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)
                : ''}
            </h1>
        </div>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card className="my-3 p-2 rounded text-center shadow p-3 mb-5 bg-white" style={{ border: 'none', width: '100%', }}>
            <div style={{ backgroundColor: color }}>
              <Link to={`/pokemon/${pokemonDetails?.id}`}>
                <Card.Img
                  style={{ width: '10rem' }}
                  src={pokemonDetails?.sprites?.other['official-artwork']?.front_default}
                  variant="top"
                />
              </Link>

            </div>
          </Card>
        </Col>
        <Row>
            <Col>
                <Card className="d-none d-lg-block" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="d-inline p-2 text-dark"><b>Abilities:</b></div>
                    <div className="d-inline p-2 text-dark">{pokemonDetails?.abilities.map((type, index) => (
                        <span  key={type.ability.name} >
                            {index > 0 && ', '}
                            {type.ability.name}
                        </span>
                        ))}</div>
                </Card>
            </Col>

            <Col>
                <Card>
                    <br/>
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
