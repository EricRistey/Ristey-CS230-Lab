import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CustomCard = () => {
  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>Card 1 Body</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>Card 2 Body</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>Card 3 Body</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CustomCard;