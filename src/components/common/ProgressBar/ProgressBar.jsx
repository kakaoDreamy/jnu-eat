import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';

const BarWrapper = styled.div`
  margin-top: 3px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1px;
  overflow: hidden;
`;
const StepItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  font-weight: 200;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  &::before {
    position: absolute;
    content: '';
    border-bottom: 11px solid
      ${props =>
        props.status === 'active' || props.status === 'completed'
          ? '#2183dd'
          : '#f0f0f0'};

    width: 100%;
    top: 8px;
    left: -50%;
    z-index: 2;
  }
  &::after {
    position: absolute;
    content: '';
    border-bottom: 11px solid
      ${props => (props.status === 'completed' ? '#2183dd' : '#f0f0f0')}; //complete만 파란색
    width: 100%;
    top: 8px;
    left: 50%;
    z-index: 2;
  }
`;

const StepCounter = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-size: 18px;
  border-radius: 50%;
  background: white;
  margin-bottom: 6px;
  margin-top: 2px;
  padding-top: 3px;
  border: 1.3px solid #616161;

  ${props =>
    props.status === 'completed' &&
    css`
      color: white;
      font-weight: 1000;
      background-color: #4bb543;
      border: 1px solid #2183dd;
      border-radius: 50;
    `}
`;
const StepName = styled.div`
  color: ${props => {
    switch (props.status) {
      case 'completed':
        return '#4bb543';

      case 'active':
        return '#2183dd';

      default:
        return 'black';
    }
  }};
  font-size: 18px;
`;

const STAGE_NAME = [
  '조건 선택',
  '음식 선택',
  '식당 표시',
  '식당 선택',
  '선택 완료',
];
const compare = (idx, standard) => {
  if (idx + 1 < standard) {
    return 'completed';
  }
  if (idx + 1 === standard) {
    if (standard === 5) {
      return 'completed';
    }
    return 'active';
  }

  return '';
};

function ProgressBar({ curStage }) {
  const [stages, setStages] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    setStages(
      stages.map((element, idx) => {
        const status = compare(idx, curStage);

        const num = idx + 1;
        return (
          <StepItem key={STAGE_NAME[idx]} status={status} data-wow-delay="0.1s">
            <StepCounter status={status}>
              {status === 'completed' ? (
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
              ) : (
                num
              )}
            </StepCounter>
            <StepName status={status}>{STAGE_NAME[idx]}</StepName>
          </StepItem>
        );
      }),
    );
  }, [curStage]);

  return <BarWrapper>{stages}</BarWrapper>;
}

export default React.memo(ProgressBar);
