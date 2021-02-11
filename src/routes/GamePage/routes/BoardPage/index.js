import { useContext } from 'react';

import { PokemonContext } from 'src/context/pokemonContext';

import PokemonCard from 'src/components/PokemonCard';

import s from './style.module.css';

const BoardPage = () => {
  const pokemonCtx = useContext(PokemonContext);
  const plates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleCardClick = (id, isSelected) => {
    console.log('Card Clicked: ', id);
  };

  return(
    <div className={s.root}>
      <div className={s.playerOne} >
        { pokemonCtx.pokemons.map(({ id, name, type, values, img, active }) =>
          <PokemonCard
            key={id}
            id={id}
            name={name}
            type={type}
            values={values}
            img={img}
            minimize
            className={s.card}
            isActive={active}
            isSelected={true}
            onCardClick={handleCardClick}/>
        ) }
      </div>
      <div className={s.board}>
        { plates.map((plate, idx) => <div key={idx} className={s.boardPlate}>{plate}</div>) }
      </div>
    </div>
  );
};

export default BoardPage;