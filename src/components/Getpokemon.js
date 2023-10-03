import { useState, useEffect } from "react";
import axios from "axios";

function Getpokemon() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const getPokemonList = async () => {
            const pokemonArray = [];
            for (let i = 1; i <= 6; i++) {
                const response = await getPokemonData(i);
                pokemonArray.push(response);
            }

            console.log(pokemonArray);
            setPokemon(pokemonArray);
        }
        getPokemonList();
    }, []);

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    return pokemon;
}

export default Getpokemon;
