import React from 'react';
import '../css/Reset.css';
import '../css/ResultPage.css';
import restaurant from '../data/restaurant.json';

export default function KakaoShare({ resName }) {
  // eslint-disable-next-line consistent-return
  function getUrlByRes() {
    // 식당 url 받아오기 소스 코드
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < restaurant.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (restaurant[i].RES_NAME == resName) {
        // console.log(restaurant[i]);
        return restaurant[i].RES_URL;
      }
    }
  }
  const resUrl = getUrlByRes(resName);
  const kakaoImg = require('../img/kakao_icon.png');

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('cbad5fe6f61f1edbce0e854f9e36b16d');
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '뭐 먹으러 가젠!?',
          description: '이거 먹으러 가자~',
          imageUrl: 'https://ifh.cc/g/oJpwDq.png',
          link: {
            mobileWebUrl: resUrl,
            webUrl: resUrl,
          },
        },
        buttons: [
          {
            title: '카카오맵',
            link: {
              mobileWebUrl: resUrl,
              webUrl: resUrl,
            },
          },
        ],
      });
    }
  };

  return (
    <button type="button" className="share_button" onClick={kakaoButton}>
      <img alt="kakao" className="kakao_img" src={kakaoImg} />
      공유하기
    </button>
  );
}
