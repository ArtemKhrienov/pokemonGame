import { string, node } from 'prop-types';
import cn from 'classnames';

import s from './style.module.css';

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  const sectionStyle = {};

  if (urlBg) sectionStyle.backgroundImage = `url(${urlBg})`;
  if (colorBg) sectionStyle.backgroundColor = colorBg;
  
  return(
    <section className={s.root} id={id} style={sectionStyle}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{ title }</h3>
            <span className={s.separator}></span>
          </div>
          <div className={cn(s.desc, s.full)}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

Layout.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  children: node.isRequired,
  urlBg: string,
  colorBg: string,
};

export default Layout;