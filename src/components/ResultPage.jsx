import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/Reset.css';
import '../css/ResultPage.css';
import { Link } from 'react-router-dom';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import KakaoShare from './KakaoShare';
import KakaoMap from './KakaoMap';

function ResultPage({ resName, resUrl }) {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  // const kakaoImg = require('../img/kakao_icon.png');
  // const kakaoMapImg = require('../img/kakaomap_icon.png');

  // console.log('식당 url - ', resUrl);
  // 식당 url을 resUrl로 받아옴. -- 식당 url 필요하면 이거 사용하세요.
  return (
    <Modal
      className="result_popup"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(true)} // false일 때는 modal창 닫히고 true일 때는 모달창 고정
      appElement={document.getElementById('root') || undefined}
    >
      <div className="popup_close">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <button className="return_btn" type="button">
            <BsArrowCounterclockwise size={50} />
          </button>
        </Link>
      </div>
      <div>
        <p className="popup_today_go">오늘 내가 갈 식당은...</p>
        <p className="popup_title">{resName}</p>
      </div>
      <div className="popup_kakaomap">
        <p className="info">식당 정보 알아보기</p>
        <KakaoMap resUrl={resUrl} />
      </div>
      <div className="popup_kakaoshare">
        <p className="together">같이 갈 사람있나요</p>
        <KakaoShare resName={resName} />
      </div>
    </Modal>
  );
}
export default ResultPage;
