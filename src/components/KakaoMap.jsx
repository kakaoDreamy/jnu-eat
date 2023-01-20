import React from 'react';
import '../css/Reset.css';
import '../css/ResultPage.css';
import restaurant from '../data/restaurant.json';

export default function KakaoMap({ resName }) {
  // eslint-disable-next-line consistent-return
  function getUrlByRes(resname) {
    // 식당 url 받아오기 소스 코드
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < restaurant.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (restaurant[i].RES_NAME == resname) {
        // console.log(restaurant[i]);
        return restaurant[i].RES_URL;
      }
    }
  }

  const resUrl = getUrlByRes(resName);
  const kakaoMapImg = require('../img/kakaomap_icon.png');

  return (
    <button
      className="share_button"
      type="button"
      onClick={() => window.open(resUrl)}
    >
      <img alt="kakaomap" className="kakao_img" src={kakaoMapImg} />
      알아보기
    </button>
  );
}
