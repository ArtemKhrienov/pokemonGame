import { useState, useEffect } from 'react';
import {Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom';

import { PokemonContext } from 'src/context/pokemonContext';

import StartPage from './routes/StartPage';
import BoardPage from './routes/BoardPage';
import FinishPage from './routes/FinishPage';

const GamePage = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [gameResult, setGameResult] = useState(null);
  const [cardsInGame, setCardsInGame] = useState({ player1Cards: [], player2Cards: []});

  useEffect(() => {
    const unlisten = history.listen(({ pathname }) => {
      if (pathname === '/game') {
        setSelectedPokemons({});
        setGameResult(null);
        setCardsInGame({ player1Cards: [], player2Cards: []});
      }
    });

    return () => {
      unlisten();
    }
  }, []);

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons(prevState => {
      if (prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];

        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon,
      }
    });
  };

  const handlePlayersCardsFetched = (player1Cards, player2Cards) => {
    setCardsInGame({ player1Cards: player1Cards, player2Cards: player2Cards });
  };

  const handleGameFinished = (result) => {
    setGameResult(result);
    history.push('/game/finish');
  };

  return(
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons,
      cardsInGame,
      gameResult,
      onSelectedPokemons: handleSelectedPokemons,
      onPlayersCardsFetched: handlePlayersCardsFetched,
      onGameFinished: handleGameFinished
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