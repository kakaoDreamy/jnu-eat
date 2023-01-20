import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import './RouletteBox.css';

const Title = styled.div``;

function RouletteBox({
  onButton,
  startSpin,
  state,
  resetRoulette,
  changeHandler,
}) {
  console.log(state);
  return (
    <Container>
      <Row className="mt-3">
        {!onButton ? (
          <Col>
            <Title id="spin_button" alt="Spin" onClick={startSpin}>
              {' '}
              돌려돌려 ~ 돌림판
            </Title>
          </Col>
        ) : (
          <>
            <Col>
              <Button
                variant="danger"
                size="lg"
                className="w-75 p-3"
                onClick={changeHandler}
              >
                별로에요
              </Button>
            </Col>

            <Col>
              <Button
                variant="primary"
                size="lg"
                className="w-75 p-3"
                onClick={resetRoulette}
              >
                좋아요
              </Button>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default RouletteBox;
