import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from './assets/styles/GlobalStyle';

import Header from './components/Header/Header';
import PokemonList from './components/PokemonList/PokemonList';
import Modal from './components/Modal/Modal';

const App = () => {
  return (
      <>
          <GlobalStyle/>
          <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Header/>
              <Switch>
                <Route path="/details/:id" render={(props) => <><Modal match={props.match}/><PokemonList/></>} />
                <Route path="*" component={PokemonList} />
              </Switch>
            </BrowserRouter>
          </Provider>
      </>
  );
}

export default App;

