import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './assets/styles/GlobalStyle';
import PokemonList from './components/PokemonList/PokemonList';

const App = () => {
  return (
      <>
          <GlobalStyle/>
          <Provider store={store}>
            <PokemonList/>
          </Provider>
      </>
  );
}

export default App;

