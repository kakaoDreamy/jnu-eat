import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

function ProgressBar({ curStage }) {
  const [stages, setStages] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    setStages(
      stages.map((stage, idx) => {
        if (idx + 1 < curStage) {
          return 'stepper-item completed';
        }
        if (idx + 1 === curStage) {
          return 'stepper-item active';
        }

        return 'stepper-item';
      }),
    );
  }, [curStage]);

  return (
    <div className="stepper-wrapper">
      <div className={stages[0]}>
        <div className="step-counter">1</div>
        <div className="step-name">조건 선택</div>
      </div>
      <div className={stages[1]}>
        <div className="step-counter">2</div>
        <div className="step-name">음식 선택</div>
      </div>
      <div className={stages[2]}>
        <div className="step-counter">3</div>
        <div className="step-name">식당 표시</div>
      </div>
      <div className={stages[3]}>
        <div className="step-counter">4</div>
        <div className="step-name">식당 선택</div>
      </div>
      <div className={stages[4]}>
        <div className="step-counter">5</div>
        <div className="step-name">선택 완료</div>
      </div>
    </div>
  );
}

export default React.memo(ProgressBar);
