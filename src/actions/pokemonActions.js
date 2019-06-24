import { FETCH_POKEMONS,  FETCH_POKEMON_DETAILS } from './types';
import * as pokemonApi from '../api/pokemontcg.js';


export const fetchPokemons = (page) => dispatch => {
    pokemonApi.getPokemons(page).then(res => 
        dispatch({
            type: FETCH_POKEMONS,
            payload: { 
                maxItems: Number(res.headers["total-count"]),
                cards: res.data.cards
            }
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