import { string, bool } from 'prop-types';
import cn from 'classnames';

import s from './style.module.css';

const Button = ({ name, primary, ...props }) => {
  const btnClass = cn(
    s.btn,
    {
      [s.btnPrimary]: primary
    }
  );

  return(
    <>
      <button className={btnClass} {...props}>
        { name }
      </button>
    </>
  );
};

Button.propTypes = {
  name: string.isRequired,
  primary: bool
};

export default Button;