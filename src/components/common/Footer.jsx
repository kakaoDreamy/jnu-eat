import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.footer`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  /* width: 250px; */
  height: 20vh;

  /* left: 50%; */
  /* margin-left: -125px; */
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 1rem;
`;

function Footer({ children }) {
  return <FooterBlock>{children}</FooterBlock>;
}

export default Footer;
