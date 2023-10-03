import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Pokemon.css';
import changeColor from "./PokemonColor";

const Pokemon = ({ pokemon }) => {
    let types = pokemon.types
    let color = changeColor(types[0].type.name);
    return (
        <>
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
        </>



    );
}

export default Pokemon;
