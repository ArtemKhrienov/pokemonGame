import { string, bool } from 'prop-types';
import cn from 'classnames';

import s from './style.module.css';

const Button = ({ name, primary, submitting,  ...props }) => {
  const btnClass = cn(
    s.btn,
    {
      [s.btnPrimary]: primary
    }
  );

  return(
    <>
      <button className={btnClass} disabled={submitting} {...props}>
        { name }
      </button>
    </>
  );
};

Button.propTypes = {
  name: string.isRequired,
  primary: bool,
  submitting: bool
};

export default Button;