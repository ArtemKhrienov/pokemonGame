import { useState } from 'react';

import HomePage from '../routes/Home';
import GamePage from '../routes/Game';

import './App.css';

const App = () => {
  const [page, setPage] = useState('app');

  const handlePageChange = page => {
    setPage(page);
  };

  switch (page) {
    case 'app':
      return <HomePage onPageChange={handlePageChange} />;
    case 'game':
      return <GamePage onPageChange={handlePageChange} />;
    default:
      return <HomePage onPageChange={handlePageChange} />;
  }
};

export default App;
