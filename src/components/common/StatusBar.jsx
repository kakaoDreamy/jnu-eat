import React from 'react';

import styled from 'styled-components';

const StatusBarBlock = styled.div`
  border-bottom: 2px solid black;
`;
function StatusBar({ children }) {
  return <StatusBarBlock>{children}</StatusBarBlock>;
}

export default React.memo(StatusBar);
