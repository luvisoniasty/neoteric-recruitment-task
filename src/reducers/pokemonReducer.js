import { FETCH_POKEMONS, FETCH_POKEMON_DETAILS } from '../actions/types';

const initialState = {
    items: {
        maxItems: 100,
        pokemons: []
    },
    itemDetails: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                items: {
                    maxItems: action.payload.maxItems,
                    pokemons: [...state.items.pokemons, ...action.payload.cards]
                }
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