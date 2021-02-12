import { useState } from 'react';
import PokemonCard from 'src/components/PokemonCard';
import cn from 'classnames';
import s from './style.module.css';

const PlayerBoard = ({ player, cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null);
  return (
    <>
      {
        cards.map(card => (
          <div
            key={card.id}
            className={cn(s.cardBoard, { [s.selected]: isSelected === card.id })}
            onClick={() => {
              setSelected(card.id);
              onClickCard && onClickCard({
                player,
                ...card,
              });
            }}>
            <PokemonCard
              id={card.id}
              name={card.name}
              type={card.type}
              values={card.values}
              img={card.img}
              minimize
              isActive
            />
          </div>
        ))
      }
    </>
  );
};

export default PlayerBoard;