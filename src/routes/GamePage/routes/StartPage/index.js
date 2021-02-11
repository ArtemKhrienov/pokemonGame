import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import { getRandomPokemon } from 'src/services/pokemon';
import { FirebaseContext } from 'src/context/firebaseContext';
import { PokemonContext } from 'src/context/pokemonContext';

import PokemonCard from 'src/components/PokemonCard';
import { Button } from 'src/components/UI';

import s from './style.module.css';

const StartPage = () => {
  const firebase = useContext(FirebaseContext);
  const pokemonCtx = useContext(PokemonContext);
  const history = useHistory();
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket(pokemons => {
      setPokemons(pokemons);
    });
  }, [firebase]);

  const handleCardClick = (id, isSelected) => {
    const updatedState = Object.entries(pokemons).reduce((acc, item) => {
      const pokemon = {...item[1]};
      if (pokemon.id === id) {
        pokemon.active = !pokemon.active;
        (isSelected) ?
          pokemonCtx.onPokemonSelected(pokemon) :
          pokemonCtx.onPokemonUnselected(pokemon);
      }
      acc[item[0]] = pokemon;
      firebase.updatePokemon(item[0], pokemon);
      return acc;
    }, {});
    setPokemons(updatedState);
  };

  const handleAddNewPokemon = () => {
    const pokemon = getRandomPokemon();
    firebase.addPokemon(pokemon);
  };

  const handleStartGame = () => {
    history.push('/game/board');
  };

  return(
    <>
      <div className={cn(s.buttonWrapper, 'flex')}>
        <Button name="Add New Pokemon" primary onClick={handleAddNewPokemon} />
        <Button name="Start Game" primary onClick={handleStartGame} />
      </div>
      <div className="flex">
        {
          Object.entries(pokemons).map(([key, { id, name, type, values, img, active }]) =>
            <PokemonCard
              key={key}
              id={id}
              name={name}
              type={type}
              values={values}
              img={img}
              isActive={active}
              isSelected={(!(active === undefined || active === false))}
              onCardClick={handleCardClick}/>
          )
        }
      </div>
    </>
  );
};

export default StartPage;