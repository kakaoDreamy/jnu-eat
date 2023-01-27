import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import StartPage from './page/StartPage';
import MainPage from './page/MainPage';

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
