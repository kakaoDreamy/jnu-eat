import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MobileLayout = styled.div`
  position: relative;
  min-height: 100%;
  padding-bottom: 80px;
  @media (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
  height: 100vh;
`;

function Layout({ children }) {
  return <MobileLayout>{children}</MobileLayout>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
