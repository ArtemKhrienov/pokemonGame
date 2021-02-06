import { useLocation, Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

import AboutPage from '../routes/AboutPage';
import ContactPage from '../routes/ContactPage';
import GamePage from '../routes/GamePage';
import HomePage from '../routes/HomePage';
import NotFound from '../routes/NotFound';
import MenuHeader from './MenuHeader';
import Footer from './Footer';

import './App.css';
import s from './style.module.css';

const HOME_PATHS = ['/', '/home'];

const App = () => {
  const { pathname } = useLocation();

  const isHomePage = () => HOME_PATHS.includes(pathname);

  return(
    <Switch>
      <Route path="/404" component={NotFound} />
      <Route>
        <>
          <MenuHeader bgActive={!isHomePage()} homePaths={HOME_PATHS} />
          <div className={cn(s.wrap, { [s.isHomePage]: isHomePage() })}>
            <Switch>
              <Route path={HOME_PATHS} exact component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/game" component={GamePage} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );
};

export default App;
