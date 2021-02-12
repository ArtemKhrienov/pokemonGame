import { useLocation, Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import GamePage from './GamePage';
import HomePage from './HomePage';
import NotFound from './NotFound';
import MenuHeader from 'src/components/MenuHeader';
import Footer from 'src/components/Footer';

import { FirebaseContext } from 'src/context/firebaseContext';
import Firebase from 'src/services/firebase';

import './App.css';
import s from './style.module.css';

const HOME_PATHS = ['/', '/home'];
const BG_NOT_ACTIVE_PATHS = ['/', '/home', '/game/board'];

const App = () => {
  const { pathname } = useLocation();

  const isHomePage = () => HOME_PATHS.includes(pathname);
  const isPadding = () => BG_NOT_ACTIVE_PATHS.includes(pathname);

  return(
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding()} homePaths={HOME_PATHS} />
            <div className={cn(s.wrap, { [s.isHomePage]: isHomePage() || isPadding() })}>
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
    </FirebaseContext.Provider>
  );
};

export default App;
