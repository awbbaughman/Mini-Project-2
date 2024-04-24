import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroCards = ({ heroes }) => {

  return (
    <div className="hero-cards-container">
      <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
        {heroes.map((hero) => (
          <Col key={hero.name}>
            <Card
              className="text-white bg-dark position-relative border border-warning"
              style={{ width: '160px', cursor: 'pointer' }}
              onClick={handleHeroSelect}
            >
              <Card.Img className="hover-zoom" src={hero.portrait} alt={hero.name} style={{ height: '120px', objectFit: 'cover' }} />
              <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                <div className="text-center">
                    <Card.Title className="text-uppercase fw-bold fs-10 mb-0 text-warning bg-secondary bg-opacity-50" style={{ fontStyle: 'italic' }}>
                      {hero.name}
                    </Card.Title>
                </div>
                <div className="text-left">
                    <Card.Text className="fw-bold fs-6 text-white">
                      Role: {hero.role.toUpperCase()}
                    </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>


    </div>
  );
};

export default HeroCards;

/*

This component is intended to fetch an API that holds a wealth of data on heroes from the game Overwatch.

I tried to create a dynamic list of Bootstrap cards based on how many heroes there are in the API.

I used some custom Boostrap styling to modify the size of the cards, font, and text overlay.
I could not get Bootstrap on-hover effects to work.

*/