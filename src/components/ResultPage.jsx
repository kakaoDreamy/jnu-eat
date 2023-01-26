import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/Reset.css';
import '../css/ResultPage.css';
import KakaoShare from './KakaoShare';
import KakaoMap from './KakaoMap';

function ResultPage({ resName, resUrl }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const kakaoImg = require('../img/kakao_icon.png');
  // const kakaoMapImg = require('../img/kakaomap_icon.png');

  console.log('식당 url - ', resUrl);
  // 식당 url을 resUrl로 받아옴. -- 식당 url 필요하면 이거 사용하세요.
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Modal Open
      </button>

      <Modal
        className="result_popup"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        appElement={document.getElementById('root') || undefined}
      >
        <div className="popup_close">
          <button
            type="button"
            className="popup_close_button"
            onClick={() => setModalIsOpen(false)}
          >
            &#x2716;
          </button>
        </div>
        <div>
          <p className="popup_today_go">오늘 내가 갈 식당은...</p>
          <p className="popup_title">{resName}</p>
        </div>
        <div className="popup_kakaomap">
          <p className="info">식당 정보 알아보기</p>
          <KakaoMap resName={resName} />
        </div>
        <div className="popup_kakaoshare">
          <p className="together">같이 갈 사람있나요</p>
          <KakaoShare resName={resName} />
        </div>
      </Modal>
    </>
  );
}
export default ResultPage;
