import React from 'react';
import '../css/StartPage.css';
import ResultPage from './ManualPopup';

function App() {
  const logo = require('../img/title.png');
  return (
    <div className="page">
      <div className="subtitle">
        <br />뭐 먹을지 결정하기
        <br />
        어려울 때는
      </div>
      <div className="maintitle">
        <img alt="mainlogo" className="logo" src={logo} />
      </div>
      <div className="reommendation">
        <button type="button" className="recommendation_btn">
          추천받기
        </button>
      </div>
      <div className="manual">
        <ResultPage />
      </div>
    </div>
  );
}

export default App;
