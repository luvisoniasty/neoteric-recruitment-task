import { FETCH_POKEMONS, FETCH_POKEMON_DETAILS } from './types';
import * as pokemonApi from '../api/pokemontcg.js';

export const fetchPokemons = () => dispatch => {
    pokemonApi.getPokemons().then(res => 
        dispatch({
            type: FETCH_POKEMONS,
            payload: res.data.cards
        })
    );
}

export const fetchPokemonDetails = (id) => dispatch => {
    pokemonApi.getPokemonDetails(id).then(res =>
        dispatch({
            type: FETCH_POKEMON_DETAILS,
            payload: res.data.card
        })
    );
}