import POKEMONS from '../../shared/data/pokemons.json';

import { useState } from 'react';

import PokemonCard from '../../components/PokemonCard';

const GamePage = () => {
  const [pokemons, setPokemons] = useState(POKEMONS.map(pokemon => {
    pokemon.active = false;
    return pokemon;
  }));

  const handleCardClick = id => {
    setPokemons([...pokemons].map(pokemon => {
      if (pokemon.id === id) {
        pokemon.active = !pokemon.active;
        return {...pokemon};
      };
      return pokemon;
    }));
  };

  return(
    <div className="flex">
      {
        pokemons.map(({ id, name, type, values, img, active }) =>
            <PokemonCard
              key={id}
              id={id}
              name={name}
              type={type}
              values={values}
              img={img}
              isActive={active}
              onCardClick={handleCardClick}/>
        )
      }
    </div>
  );
};

export default GamePage;