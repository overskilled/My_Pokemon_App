import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";

const Searchpage = () => {
  return (
    <Container>
        <Row>
            <Col xs={12} md={6} >
                <Card as='div'
                className="my-3 p-3 rounded text-center shadow mb-5 bg-white"
                style={{border: 'none', width: '25rem', background: color}}
                >
                <div style={{backgroundColor: color}}>
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <Card.Img
                            className='pokemon'
                            src={pokemon.sprites.other['official-artwork'].front_default}
                            variant="top"
                        />
                    </Link>
                    <Card.Body
                        className={`${pokemon.types[0].type.name}`}

                    >
                        <Link to={`/pokemon/${pokemon.id}`} className="link-name">
                            <Card.Title as="div"
                            >
                                <strong>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                </strong>
                            </Card.Title>
                        </Link><hr></hr>
                        <div className='pokemon-type'>
                            {
                                pokemon.types.map((type)=>{
                                    return <p>{type.type.name}</p>
                                })
                            }
                        </div>
                    </Card.Body></div>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Searchpage
