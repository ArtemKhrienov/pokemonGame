import { func } from 'prop-types';

import POKEMONS from '../../shared/data/pokemons.json';

import MenuHeader from '../../components/MenuHeader';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';

import RulesLayoutBg from '../../assets/img/bg.jpg';
import AboutLayoutBg from '../../assets/img/bg2.jpg';

const HomePage = ({ onPageChange }) => {
  const handlePageChange = page => {
    onPageChange && onPageChange(page);
  };

  return(
    <>
      <MenuHeader onClickMenuItem={handlePageChange} />
      <Header title="This is title" descr="This is Description!" onClickButton={handlePageChange} />
      <Layout id="about" title="About" urlBg={RulesLayoutBg}>
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
      </Layout>
      <Layout id="cards" title="Cards" colorBg="#fafafa00">
        <div className="flex">
          {
            POKEMONS.map(({ id, name, type, values, img }) =>
                <PokemonCard key={id} id={id} name={name} type={type} values={values} img={img}/>
            )
          }
        </div>
      </Layout>
      <Layout id="rules" title="Rules" urlBg={AboutLayoutBg}>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
      </Layout>
      <Footer />
    </>
  );
};

HomePage.propTypes = {
  onPageChange: func.isRequired
};

export default HomePage;