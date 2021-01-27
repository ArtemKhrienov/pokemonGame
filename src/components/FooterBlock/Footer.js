import { string } from 'prop-types';

import s from './Footer.module.css';

const Footer = ({
    title = 'THANKS FOR VISITING',
    copyright = '© 2021 #ReactMarathon.'
  }) => {
  return (
    <footer>
      <div className={s.wrapper}>
        <h3>{ title }</h3>
        <p>{ copyright }</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  title: string,
  copyright: string
};

export default Footer;