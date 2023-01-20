import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SelectBtn = styled.select`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;

  background: #ffffff;
  border: 3px solid #000000;
  border-radius: 10px;
  width: 100%;
`;

function SelectBox({ state, locationHandler, timeHandler, nextStage }) {
  return (
    <Container>
      {state.curStage === 1 ? (
        <>
          <Row className="mb-2">
            <Col xs="4">현재 위치</Col>
            <Col>
              <SelectBtn onChange={locationHandler} value={state.location}>
                <option>현재 위치 선택</option>
                <option value="공과대학 4호관">공과대학 4호관</option>
                <option value="교양강의실">교양강의실</option>
                <option value="도서관">도서관</option>
              </SelectBtn>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs="4">소요 시간</Col>
            <Col>
              <SelectBtn onChange={timeHandler} value={state.time}>
                <option>소요 시간 선택</option>
                <option value="5분 이내">5분 이내</option>
                <option value="10분 이내">10분 이내</option>
                <option value="15분 이내">15분 이내</option>
              </SelectBtn>
            </Col>
          </Row>
          <div className="d-grid gap-1">
            <Button variant="secondary" onClick={nextStage}>
              룰렛
            </Button>
          </div>
        </>
      ) : (
        <Button variant="secondary" onClick={nextStage}>
          식당 고르기
        </Button>
      )}
    </Container>
  );
}

export default SelectBox;
