import { string } from 'prop-types';

import s from './Header.module.css';

const Header = ({
    title = 'This is title',
    descr = 'This is Description!'
  }) => {
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
  title: string,
  descr: string
};

export default Header;