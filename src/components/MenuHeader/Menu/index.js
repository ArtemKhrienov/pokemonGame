import MENU from '../../../shared/data/menu.json';

import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './style.module.css';

const Menu = ({ active, onClickMenuItem }) => {
  return(
    <div className={cn(s.menuContainer, {[s.active]: active === true, [s.deactive]: active === false})}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {
            MENU.map(({title, to}, index) => (
              <li key={index}>
                <Link to={to} onClick={() => onClickMenuItem()}>
                  {title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  active: bool,
  onClickMenuItem: func.isRequired
};

export default Menu;