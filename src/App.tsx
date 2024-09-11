import './App.css';
import './index.css';

import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FaqPage from './pages/FaqPage.tsx';
import FavPage from './pages/FavPage.tsx';
import IntroPage from './pages/IntroPage.tsx';
import MobilePage from './pages/Mobile.tsx';

const App: React.FC = () => {
  return (
    <>
      <MobileView>
        <MobilePage />
      </MobileView>
      <BrowserView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/fav" element={<FavPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/mob" element={<MobilePage />} />
          </Routes>
        </BrowserRouter>
      </BrowserView>
    </>
  );
};

export default App;
