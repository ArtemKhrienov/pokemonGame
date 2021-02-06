import { useState } from 'react';
import { bool, array } from 'prop-types';

import Menu from './Menu';
import NavBar from './Navbar';

const MenuHeader = ({ bgActive, homePaths }) => {
  const [isActive, setActive] = useState(null);

  const handleClickMenuItem = () => {
    setActive(prevState => !prevState);
  };

  const handleCloseMenu = () => {
    setActive(prevState => !prevState);
  };

  return(
    <>
      <Menu active={isActive} onClickMenuItem={handleClickMenuItem}/>
      <NavBar active={isActive} bgActive={bgActive} homePaths={homePaths} onCloseMenu={handleCloseMenu} />
    </>
  );
};

MenuHeader.propTypes = {
  homePaths: array.isRequired,
  bgActive: bool
};

export default MenuHeader;