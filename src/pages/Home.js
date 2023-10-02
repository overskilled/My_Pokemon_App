import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

//components
import getPokemon from "../components/Getpokemon";

const Home = () => {
    const pokemon = Getpokemon();

    return (
        <>
            {
                <Row>
                    {pokemon.map((p) => (
                        <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>

                        </Col>
                    ))}
                </Row>
            }
        </>
    )
}
