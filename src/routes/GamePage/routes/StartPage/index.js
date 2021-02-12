import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

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

    return () => firebase.offPokemonSoket();
  }, [firebase]);

  const handleChangeSelected = (key) => {
    const pokemon = { ...pokemons[key] };
    pokemonCtx.onSelectedPokemons(key, pokemon);
    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }));
  };

  const handleStartGameClick = () => {
    history.push('/game/board');
  };

  return(
    <>
      <div className={s.buttonWrapper}>
        <Button
          name="Start Game"
          primary
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemonCtx.pokemons).length < 5}
        />
      </div>
      <div className={s.flex}>
        {
          Object.entries(pokemons).map(([key, { id, name, type, values, img, selected }]) =>
            <PokemonCard
              className={s.card}
              key={key}
              id={id}
              name={name}
              type={type}
              values={values}
              img={img}
              isActive={true}
              isSelected={selected}
              onCardClick={() => {
                if (Object.keys(pokemonCtx.pokemons).length < 5 || selected) {
                  handleChangeSelected(key)
                }
              }}/>
          )
        }
      </div>
    </>
  );
};

export default StartPage;