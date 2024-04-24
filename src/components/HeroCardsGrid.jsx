import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HeroCards from './heroCardsUnofficial';

const HeroCardsGrid = ({ heroes, onHeroSelect }) => {
  // Ensure heroes array contains exactly 40 heroes (for a 4x10 grid)
  const filteredHeroes = heroes.slice(0, 40); // Slice the first 40 heroes if more than 40 are provided

  return (
    <div className="hero-cards-grid">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredHeroes.map((hero, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <HeroCards hero={hero} onHeroSelect={onHeroSelect} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HeroCardsGrid;
