import { Row, Col } from "react-bootstrap";

//components
import Getpokemon from "../components/Getpokemon";
import Pokemon from "../components/Pokemon";
import NavbarTool from "../components/NavbarTool";

const Home = () => {
    const pokemon = Getpokemon();
    const styles = {
        backgroundColor: "#ffffb3",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

    return (
        <div style={styles}>
            {console.log(pokemon)}
            <NavbarTool />
            {pokemon.name}
            <Row>
                {pokemon.map((p) => (
                    <Col key={p.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Pokemon pokemon={p} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home;
