import React from 'react';
import '../css/StartPage.css';
import { Link } from 'react-router-dom';
import ManualPage from './ManualPopup';

function StartPage() {
  const logo = require('../img/title.png');
  // const movePage = useNavigate();

  // const navTomap = () => {
  //   movePage('./MainPage.jsx');
  // };

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
          <Link to="/main" style={{ textDecoration: 'none', color: 'black' }}>
            추천받기
          </Link>
        </button>
      </div>
      <div className="manual">
        <ManualPage />
      </div>
    </div>
  );
}

export default StartPage;
