import React, { useState } from "react";
import { Container, Form, FormControl, Button } from 'react-bootstrap';

function Searchbar(props) {

    const [search, setSearch] = useState('');

    return (

        <div  className="d-flex justify-content-end ">
           <Container bg="primary" >
                <Form className="d-flex mt-2 flex-row" inline>
                    <FormControl
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search a Pokémon"
                        className="mr-sm-2" />
                    <Button
                        variant="outline-light"
                        onClick={(e) => props.getPokemon(search)}
                    >
                    Search a pokemon</Button>
                </Form>
            </Container>
        </div>

    );
}

export default Searchbar;
