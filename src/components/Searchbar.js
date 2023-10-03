import React from "react";
import { Container, Form, FormControl, Button } from 'react-bootstrap';

function Searchbar() {
    return (
        <div  className="d-flex justify-content-end ">
           <Container bg="primary" >
                <Form className="d-flex mt-2 flex-row" inline>
                    <FormControl type="text" placeholder="Search a Pokémon" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Container>
        </div>

    );
}

export default Searchbar;
