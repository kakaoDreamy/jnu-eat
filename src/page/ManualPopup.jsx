import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/Reset.css';
import '../css/ManualPage.css';
import { BiHelpCircle } from 'react-icons/bi';

function ManualPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button
        className="manual_btn"
        type="button"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <BiHelpCircle size={50} />
      </button>

      <Modal
        className="manual_popup"
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
        <div className="manual_content">
          <h1>사용방법</h1>
          <br />
          <p>1. 추천받기 버튼 클릭!</p>
          <br />
          <p>
            2. 위치와 소요 시간 선택 후
            <br />
            지도 마커 확인
          </p>
          <br />
          <p>3. 결정이 안될 시 룰렛창으로 이동</p>
          <br />
          <p>4. 룰렛을 돌려서 음식 및 식당 랜덤 추천</p>
          <br />
          <p>5. 추첨 결과 확인 후 정보 확인 및 결과 공유</p>
        </div>
      </Modal>
    </>
  );
}
export default ManualPage;
