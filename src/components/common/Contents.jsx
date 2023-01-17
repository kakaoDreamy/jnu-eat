import React from 'react';
import styled from 'styled-components';

const ContentsBlock = styled.div`
  width: 100%;

  margin: 0px auto;

  background-color: silver;

  height: 71vh;
`;

function Contents({ children }) {
  return <ContentsBlock>{children}</ContentsBlock>;
}

export default Contents;
