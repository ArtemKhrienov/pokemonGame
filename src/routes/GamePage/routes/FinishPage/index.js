import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from 'src/context/pokemonContext';
import { FirebaseContext } from 'src/context/firebaseContext';
import PokemonCard from 'src/components/PokemonCard';
import { Button } from 'src/components/UI';
import s from './style.module.css';

const FinishPage = () => {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const { cardsInGame, gameResult } = useContext(PokemonContext);
  const [isPokemonAdded, setPokemonAdded] = useState(false);

  if (!gameResult) {
    history.replace('/game');
  }

  const handleEndGameClick = () => {
    history.push('/game');
  };

  const handleAddNewPokemon = async (card) => {
    if (!isPokemonAdded) {
      setPokemonAdded(true);
      await firebase.addPokemon(card);
    }
  };

  return(
    <>
      <div className={s.flex}>
        {
          cardsInGame.player1Cards.map(card =>
            <PokemonCard
              key={card.id}
              id={card.id}
              className={s.card}
              name={card.name}
              type={card.type}
              values={card.values}
              img={card.img}
              isActive />
          )
        }
      </div>
      <div className={s.buttonWrapper}>
        <Button
          name="End Game"
          primary
          onClick={handleEndGameClick}
        />
      </div>
      <div className={s.flex}>
        {
          cardsInGame.player2Cards.map(card =>
            <PokemonCard
              key={card.id}
              id={card.id}
              className={s.card}
              name={card.name}
              type={card.type}
              values={card.values}
              img={card.img}
              isActive
              onCardClick={async () => {
                if (gameResult === 'WIN' && !isPokemonAdded) {
                  await handleAddNewPokemon(card)
                }
              }}
            />
          )
        }
      </div>
    </>
  );
};

export default FinishPage;