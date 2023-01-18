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

function SelectBox() {
  return (
    <Container>
      <Row className="mb-2">
        <Col xs="4">현재 위치</Col>
        <Col>
          <SelectBtn>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </SelectBtn>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs="4">소요 시간</Col>
        <Col>
          <SelectBtn>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </SelectBtn>
        </Col>
      </Row>
      <div className="d-grid gap-1">
        <Button variant="secondary">Show Me</Button>
      </div>
    </Container>
  );
}

export default SelectBox;
