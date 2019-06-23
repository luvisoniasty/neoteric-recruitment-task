import axios from 'axios';

const pokemonInstance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v1/',
});

export const getPokemons = () => 
    pokemonInstance.get('cards');


export const getPokemonDetails = id => 
    pokemonInstance.get(`cards/${id}`);
