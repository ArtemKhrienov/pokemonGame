import { bool, func, array } from 'prop-types';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

import s from './style.module.css';

const NavBar = ({ active, onCloseMenu, bgActive, homePaths }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleLogoClick = () => {
    if (!homePaths.includes(pathname)) {
      if (active) onCloseMenu && onCloseMenu();
      history.push('/');
    }
  };
  
  return(
    <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand} onClick={handleLogoClick}>
          LOGO
        </p>
        <div
          className={cn(s.menuButton, { [s.active]: active })}
          onClick={onCloseMenu}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  homePaths: array.isRequired,
  onCloseMenu: func.isRequired,
  active: bool,
  bgActive: bool
};

export default NavBar;