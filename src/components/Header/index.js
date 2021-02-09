import { string } from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Button } from 'src/components/UI';
import s from './style.module.css';

const Header = ({ title, descr }) => {
  const history = useHistory();

  const handleClickButton = () => {
    history.push('/game');
  };

  return (
    <header className={s.root}>
      <div className={s.forest} />
      <div className={s.silhouette} />
      <div className={s.moon} />
      <div className={s.container}>
        <h1>{ title }</h1>
        <p>{ descr }</p>
        <Button name="Start Game" primary onClick={handleClickButton} />
      </div>
    </header>
  );
};

Header.propTypes = {
  title: string.isRequired,
  descr: string.isRequired
};

export default Header;