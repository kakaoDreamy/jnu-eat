import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import building from '../../data/building.json';

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
              <SelectBtn onChange={locationHandler}>
                <option>현재 위치 선택</option>

                {building.map(element => {
                  return (
                    <option
                      key={element.building_id}
                      value={JSON.stringify({
                        lat: element.building_lat,
                        lng: element.building_lng,
                        name: element.building_name,
                      })}
                    >
                      {element.building_name}
                    </option>
                  );
                })}
              </SelectBtn>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs="4">소요 시간</Col>
            <Col>
              <SelectBtn onChange={timeHandler} value={state.time}>
                <option>소요 시간 선택</option>
                <option value="5">5분 이내</option>
                <option value="10">10분 이내</option>
                <option value="15">15분 이내</option>
              </SelectBtn>
            </Col>
          </Row>
          <div className="d-grid gap-1">
            <Button
              variant={!state.time ? 'secondary' : 'primary'}
              onClick={nextStage}
              disabled={!state.time}
            >
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
