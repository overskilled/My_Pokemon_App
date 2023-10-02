import { useState, useEffect} from "react";
import axios from "axios";

const getPokemon = () => {
    const [pokemon, setPokemon] = usestate([]);

    useEffect(() => {
        const getPokemonList = async () => {
            const pokemonArray = [];
            for (let i = 1; i <= 6; i++) {
                const response = await getpokemonData(id);
                pokemonArray.push(response);
            }

            console.log(pokemonArray);
            setPokemon(pokemonArray);
        }
        getPokemonList
    }, []);

    const getpokemonData = async (id) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response;
    }

    return pokemon;
}

export default getPokemon;
