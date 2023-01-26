import React from 'react';
import styled from 'styled-components';

const ContentsBlock = styled.div`
  width: 100%;

  margin: 0px auto;

  background-color: rgba(97, 218, 255, 0.5);

  height: 71vh;
`;

function Contents({ children }) {
  return <ContentsBlock>{children}</ContentsBlock>;
}

export default Contents;
