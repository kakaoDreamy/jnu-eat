import React from 'react';
import styled from 'styled-components';
import Roulette from '../roulette/Roulette';

const ContentsBlock = styled.div`
  width: 100%;

  margin: 0px auto;

  background-color: silver;

  height: 71vh;
`;

function Contents2() {
  return (
    <ContentsBlock>
      <Roulette />
    </ContentsBlock>
  );
}

export default Contents2;
