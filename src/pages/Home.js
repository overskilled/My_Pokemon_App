import { Row, Col } from "react-bootstrap";

//components
import Getpokemon from "../components/Getpokemon";
import Pokemon from "../components/Pokemon";
import NavbarTool from "../components/NavbarTool";

const Home = () => {
    const pokemon = Getpokemon();

    return (
        <>
            {

                <Row>
                    <NavbarTool />
                    {pokemon.map((p) => (
                        <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Pokemon pokemon={p.data} />
                        </Col>
                    ))}
                </Row>
            }
        </>
    )
}

export default Home;
