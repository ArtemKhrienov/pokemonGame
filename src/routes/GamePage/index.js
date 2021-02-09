import { useState } from 'react';
import {Switch, Route, useRouteMatch, Redirect} from 'react-router-dom';

import { PokemonContext } from 'src/context/pokemonContext';

import StartPage from './routes/StartPage';
import BoardPage from './routes/BoardPage';
import FinishPage from './routes/FinishPage';

const GamePage = () => {
  const match = useRouteMatch();
  const [pokemons, setPokemons] = useState([]);

  const handlePokemonSelected = (pokemon) => {
    setPokemons(prevState => [...prevState, pokemon]);
  };

  const handlePokemonUnselected = pokemon => {
    setPokemons(prevState => {
      const idx = prevState.findIndex( item => item.id === pokemon.id);
      return (idx !== -1) ? prevState.splice(idx, 1) : prevState;
    });
  };

  return(
    <PokemonContext.Provider value={{
      pokemons,
      onPokemonSelected: handlePokemonSelected,
      onPokemonUnselected: handlePokemonUnselected
    }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage}/>
        <Route path={`${match.path}/board`} component={BoardPage}/>
        <Route path={`${match.path}/finish`} component={FinishPage}/>
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;