import { useState } from 'react';
import { func } from 'prop-types';

import Menu from './Menu';
import NavBar from './Navbar';

const MenuHeader = ({ onClickMenuItem }) => {
  const [isActive, setActive] = useState(false);

  const handleClickMenuItem = item => {
    onClickMenuItem && onClickMenuItem(item);
    setActive(!isActive);
  };

  const handleCloseMenu = () => {
    setActive(!isActive);
  };

  return(
    <>
      <Menu active={isActive} onClickMenuItem={handleClickMenuItem}/>
      <NavBar active={isActive} onCloseMenu={handleCloseMenu} />
    </>
  );
};

MenuHeader.propTypes = {
  onClickMenuItem: func.isRequired
};

export default MenuHeader;