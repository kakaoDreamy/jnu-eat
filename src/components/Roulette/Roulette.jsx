/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import WheelComponent from 'react-wheel-of-prizes';

// import styled from 'styled-components';
// import 'react-wheel-of-prizes/dist/index.css';

function Roulette() {
  const segments = [
    'better luck next time',
    'won 70',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher',
    'a',
  ];
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
  ];
  const onFinished = winner => {
    console.log(winner);
  };
  return (
    <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment="won 10"
      onFinished={winner => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="돌려돌려"
      isOnlyOnce={false}
      size={290}
      upDuration={100}
      downDuration={250}
      fontFamily="Arial"
    />
  );
}

export default Roulette;
