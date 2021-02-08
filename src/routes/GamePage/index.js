import { useState, useEffect } from 'react';
import database from '../../services/firebase';
import cn from 'classnames';

import { getPokemon } from '../../services/pokemon';

import PokemonCard from '../../components/PokemonCard';
import { Button } from '../../components/UI';

import s from './style.module.css';

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const handleCardClick = id => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
          database.ref(`pokemons/${item[0]}`).update(pokemon);
        }
        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
  };

  const handleAddNewPokemon = () => {
    const newKey = database.ref().child('pokemons').push().key;
    const pokemonData = getPokemon();

    database.ref(`pokemons/${newKey}`).set(pokemonData, (err) => {
      if (!err) {
        setPokemons(prevState => {
          return { ...prevState, [newKey]: pokemonData };
        });
      }
    });
  };

  return(
    <>
      <div className={cn(s.buttonWrapper, 'flex')}>
        <Button name="Add New Pokemon" primary onClick={handleAddNewPokemon} />
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
              isActive={!!active}
              onCardClick={handleCardClick}/>
          )
        }
      </div>
    </>
  );
};

export default GamePage;