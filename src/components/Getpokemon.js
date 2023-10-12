import { useState, useEffect } from "react";

function Getpokemon() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
          const data = await response.json();
          const results = await Promise.all(data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            return pokemonResponse.json();
          }));
          setPokemon(results);
        };
        fetchData();
      }, []);
    console.log(pokemon);
    return pokemon;
}

export default Getpokemon;
