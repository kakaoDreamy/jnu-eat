import React from 'react';
import './ProgressBar.css';

function ProgressBar() {
  return (
    <div className="stepper-wrapper">
      <div className="stepper-item active">
        <div className="step-counter">1</div>
        <div className="step-name">조건 선택</div>
      </div>
      <div className="stepper-item">
        <div className="step-counter">2</div>
        <div className="step-name">음식 선택</div>
      </div>
      <div className="stepper-item">
        <div className="step-counter">3</div>
        <div className="step-name">식당 표시</div>
      </div>
      <div className="stepper-item">
        <div className="step-counter">4</div>
        <div className="step-name">식당 선택</div>
      </div>
      <div className="stepper-item">
        <div className="step-counter">5</div>
        <div className="step-name">선택 완료</div>
      </div>
    </div>
  );
}

export default React.memo(ProgressBar);
