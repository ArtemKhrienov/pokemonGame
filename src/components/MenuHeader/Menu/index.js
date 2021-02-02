import { bool, func } from 'prop-types';
import cn from 'classnames';

import s from './style.module.css';

const Menu = ({ active, onClickMenuItem }) => {
  return(
    <div className={cn(s.menuContainer, {[s.active]: active, [s.deactive]: !active})}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          <li>
            <a href="#welcome" onClick={() => onClickMenuItem('welcome')}>
              HOME
            </a>
          </li>
          <li>
            <a href="#game" onClick={() => onClickMenuItem('game')}>
              GAME
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => onClickMenuItem('about')}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => onClickMenuItem('contact')}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  active: bool.isRequired,
  onClickMenuItem: func.isRequired
};

export default Menu;