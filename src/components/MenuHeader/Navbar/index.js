import { bool, func } from 'prop-types';
import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({ active, onCloseMenu }) => {
  return(
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <a
          href="#welcome"
          className={cn(s.menuButton, { [s.active]: active, [s.deactive]: !active })}
          onClick={onCloseMenu}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  active: bool.isRequired,
  onCloseMenu: func.isRequired
};

export default NavBar;