import { string, number, object, bool, func, oneOfType } from 'prop-types';
import cn from 'classnames';

import cardBackSideBg from './assets/card-back-side.jpg';
import s from './style.module.css';

const PokemonCard = ({
                       id,
                       name,
                       type,
                       values,
                       img,
                       isActive = true,
                       isSelected,
                       className,
                       minimize,
                       onCardClick }) => {
  const handleClick = () => {
    onCardClick && onCardClick(id, !isSelected);
  };

  return(
    <div className={((minimize) ? s.minimizedRoot : s.root)} onClick={handleClick}>
      <div className={cn(className, s.pokemonCard, {[s.active]: isActive, [s.selected]: isSelected})}>
        <div className={s.cardFront}>
          <div className={cn(s.wrap, s.front)}>
            <div className={cn(s.pokemon, type)}>
              <div className={s.values}>
                <div className={cn(s.count, s.top)}>{values.top}</div>
                <div className={cn(s.count, s.right)}>{values.right}</div>
                <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                <div className={cn(s.count, s.left)}>{values.left}</div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              { !minimize && (<div className={s.info}>
                <span className={s.number}>#{id}</span>
                <h3 className={s.name}>
                  {name}
                </h3>
                <small className={s.type}>
                  Type: <span>{type}</span>
                </small>
              </div>) }
            </div>
          </div>
        </div>
        <div className={s.cardBack}>
          <div className={cn(s.wrap, s.back)}>
            <img src={cardBackSideBg} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  id: oneOfType([number, string]).isRequired,
  name: string.isRequired,
  type: string.isRequired,
  values: object.isRequired,
  img: string.isRequired,
  onCardClick: func.isRequired,
  isActive: bool,
  isSelected: bool,
  className: string,
  minimize: bool
};

export default PokemonCard;