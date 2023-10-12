

const baseUrl = 'https://pokeapi.co/api/v2';
const query = {
    pokemon: 'pokemon'
}

const searchPokemon = (pokemon) => {
    console.log(`${baseUrl}/${query.pokemon}/${pokemon}`);
  return (
    fetch(`${baseUrl}/${query.pokemon}/${pokemon}`)
  )
}

export default searchPokemon;
