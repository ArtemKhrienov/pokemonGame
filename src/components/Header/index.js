import { string } from 'prop-types';

import s from './style.module.css';

const Header = ({ title, descr }) => {
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{ title }</h1>
        <p>{ descr }</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: string.isRequired,
  descr: string.isRequired
};

export default Header;