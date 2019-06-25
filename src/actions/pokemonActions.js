import { FETCH_POKEMONS,  FETCH_POKEMON_DETAILS } from './types';
import * as pokemonApi from '../api/pokemontcg.js';


export const fetchPokemons = (page) => dispatch => {
    pokemonApi.getPokemons(page).then(res => 
        dispatch({
            type: FETCH_POKEMONS,
            payload: { 
                maxItems: Number(res.headers["total-count"]),
                page: page + 1,
                cards: res.data.cards
            }
        })
    );
    return Promise.resolve();
}

export const fetchPokemonDetails = (id) => dispatch => {
    pokemonApi.getPokemonDetails(id).then(res => {
        pokemonApi.getSimilarPokemons(res.data.card.supertype, res.data.card.types, res.data.card.rarity, res.data.card.hp).then(response =>
            dispatch({
                type: FETCH_POKEMON_DETAILS,
                payload: {
                    details: res.data.card,
                    similar: response.data.cards
                }
            })
        );
    });
    return Promise.resolve();
}