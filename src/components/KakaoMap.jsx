import React from 'react';
import '../css/Reset.css';
import '../css/ResultPage.css';

export default function KakaoMap({ resUrl }) {
  // eslint-disable-next-line consistent-return

  const kakaoMapImg = require('../img/kakaomap_icon.png');

  const url = `${resUrl}`;
  return (
    <button
      className="share_button"
      type="button"
      onClick={() => window.open(url)}
    >
      <img alt="kakaomap" className="kakao_img" src={kakaoMapImg} />
      알아보기
    </button>
  );
}
