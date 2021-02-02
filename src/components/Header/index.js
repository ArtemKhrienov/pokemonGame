import { string, func } from 'prop-types';

import { Button } from '../UI';
import s from './style.module.css';

const Header = ({ title, descr, onClickButton }) => {
  const handleClick = () => {
    onClickButton && onClickButton('game');
  };
  
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{ title }</h1>
        <p>{ descr }</p>
        <Button name="Start Game" primary onClick={handleClick} />
      </div>
    </header>
  );
};

Header.propTypes = {
  title: string.isRequired,
  descr: string.isRequired,
  onClickButton: func.isRequired
};

export default Header;