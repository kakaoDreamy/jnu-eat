import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid black;
`;

const Title = styled.h3`
  text-align: center;
  align-items: center;
  margin-bottom: 0;
`;

function Header() {
  return (
    <HeaderBlock>
      <Title>제목</Title>
    </HeaderBlock>
  );
}

export default Header;
