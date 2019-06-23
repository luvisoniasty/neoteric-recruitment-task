import { FETCH_POKEMONS, FETCH_POKEMON_DETAILS } from '../actions/types';

const initialState = {
    items: [],
    itemDetails: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                items: action.payload
            }
        case FETCH_POKEMON_DETAILS:
            return {
                ...state,
                itemDetails: action.payload
            }
        default:
            return state;            
    }
}