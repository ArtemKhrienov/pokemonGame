import { func } from 'prop-types';

import { Button } from '../../components/UI';
import s from './style.module.css';

const GamePage = ({ onPageChange }) => {
  const handleClick = () => {
    onPageChange('app');
  };
  
  return(
    <>
      <div className={s.container}>
        <Button name="Back to Home Page" primary onClick={handleClick} />
      </div>
    </>
  );
};

GamePage.propTypes = {
  onPageChange: func.isRequired
};

export default GamePage;