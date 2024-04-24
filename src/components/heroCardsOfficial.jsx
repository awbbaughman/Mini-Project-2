import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Abilities from './abilities'; // Import the Abilities component

const HeroCards = ({ heroes }) => {
  const [displayAbilities, setDisplayAbilities] = useState(false);

  const handleClick = () => {

        const practiceRangeElement = document.getElementById('practiceRange');
            practiceRangeElement.scrollIntoView({ behavior: 'smooth' });

        {/*setDisplayAbilities(true); // Update state to true when clicked */}
    };

  return (
    <div className="hero-cards-container">
      <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
        {heroes.map((hero) => (
          <Col key={hero.name}>
            <Card
              className="text-white bg-dark position-relative border border-warning"
              style={{ width: '160px', cursor: 'pointer' }}
              onClick={handleClick} // Pass handleClick function to onClick event
            >
              <Card.Img
                className="hover-zoom"
                src={hero.portrait}
                alt={hero.name}
                style={{ height: '120px', objectFit: 'cover' }}
              />
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

      {/* Render Abilities component conditionally based on state */}
      {displayAbilities && <Abilities />}
    </div>
  );
};

export default HeroCards;
