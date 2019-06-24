import axios from 'axios';

const pokemonInstance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v1/'
});

export const getPokemons = (page = 1) => 
    pokemonInstance.get(`cards?page=${page}&pageSize=20`);

export const getPokemonDetails = id => 
    pokemonInstance.get(`cards/${id}`);
