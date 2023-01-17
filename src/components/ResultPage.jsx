import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/Reset.css';
import '../css/ResultPage.css';

function ResultPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const kakaoImg = require('../img/kakao_icon.png');
  const kakaoMapImg = require('../img/kakaomap_icon.png');
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
          <p className="popup_title">꽁양꽁양</p>
        </div>
        <div className="popup_kakaomap">
          <p className="info">식당 정보 알아보기</p>
          <button
            className="share_button"
            type="button"
            onClick={() =>
              window.open('https://place.map.kakao.com/1524239383')
            }
          >
            <img alt="kakaomap" className="kakao_img" src={kakaoMapImg} />
            알아보기
          </button>
        </div>
        <div className="popup_kakaoshare">
          <p className="together">같이 갈 사람있나요</p>
          <button type="button" className="share_button">
            <img alt="kakao" className="kakao_img" src={kakaoImg} />
            공유하기
          </button>
        </div>
      </Modal>
    </>
  );
}
export default ResultPage;
