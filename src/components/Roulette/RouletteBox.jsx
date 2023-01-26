import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Title = styled.div`
  font-family: 'Jua', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 69px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  -webkit-text-stroke: 1.7px black;
`;

function RouletteBox({ onButton, state, resetRoulette, changeHandler }) {
  console.log(state);
  return (
    <Container>
      <Row className="mt-3">
        {!onButton ? (
          <Col>
            <Title id="spin_button" alt="Spin">
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
                onClick={
                  state.rouletteList.length === 2
                    ? resetRoulette
                    : changeHandler
                }
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
