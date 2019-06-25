import { FETCH_POKEMONS, FETCH_POKEMON_DETAILS } from '../actions/types';

const initialState = {
    items: {
        maxItems: 100,
        page: 1,
        pokemons: []
    },
    itemDetails: {
        details: {},
        similar: []
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                items: {
                    maxItems: action.payload.maxItems,
                    page: action.payload.page,
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