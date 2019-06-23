import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer from './reducers/pokemonReducer';

const middleware = [thunk];

const store = createStore(
    pokemonReducer, 
    pokemonReducer.initialState, 
    compose( 
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )   
);

export default store;
