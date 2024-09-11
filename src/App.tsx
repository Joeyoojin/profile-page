import './App.css';
import './index.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FaqPage from './pages/FaqPage.tsx';
import FavPage from './pages/FavPage.tsx';
import IntroPage from './pages/IntroPage.tsx';
import Mobile from './pages/Mobile.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/fav" element={<FavPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/mobile" element={<Mobile />} />
      </Routes>
    </Router>
  );
};

export default App;
