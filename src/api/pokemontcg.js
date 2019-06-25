import axios from 'axios';

const pokemonInstance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v1/'
});

export const getPokemons = (page = 1) => 
    pokemonInstance.get(`cards?page=${page}&pageSize=20`);

export const getPokemonDetails = id => 
    pokemonInstance.get(`cards/${id}`);

export const getSimilarPokemons = (supertype, types,rarity,hp) => {
    if(isNaN(hp))
        return pokemonInstance.get(`cards?supertype=${supertype}&types=${types ? types.map(type => `${type}|`) : ''}&rarity=${rarity}&page=2&pageSize=3`);
        
    return pokemonInstance.get(`cards?supertype=${supertype}&types=${types ? types.map(type => `${type}|`) : ''}&rarity=${rarity}&hp=lt${Number(hp*1.1)}&hp=gt${Number(hp*0.9)}&page=2&pageSize=3`);
}