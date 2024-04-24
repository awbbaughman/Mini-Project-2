/*

import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const HeroCards = ({ onHeroSelect }) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch('https://overfast-api.tekrop.fr/heroes');
        const data = await response.json();
        setHeroes(data);
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  const handleHeroClick = (hero) => {
    onHeroSelect(hero);
  };

  return (
    <div className="hero-cards-container">
      {heroes.map((hero) => (
        <Card
          key={hero.id}
          className="bg-dark text-white"
          border="light"
          onClick={() => handleHeroClick(hero)}
        >
          <Card.Img src={hero.portrait} alt={hero.name} />
          <Card.ImgOverlay>
            <Card.Title>{hero.name.toUpperCase()}</Card.Title>
            <Card.Text>
              Role: {hero.role.toUpperCase()}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      ))}
    </div>
  );
};

export default HeroCards;










<Card
              className="bg-dark text-white"
              style={{ width: '20%', cursor: 'pointer' }}
              onClick={() => onHeroSelect(hero)}
            >
              <Card.Img src={hero.portrait} alt={hero.name} />
              <Card.Body>
                <Card.Title>{hero.name.toUpperCase()}</Card.Title>
                <Card.Text>Role: {hero.role.toUpperCase()}</Card.Text>
              </Card.Body>
            </Card>








import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HeroCards = ({ heroes, onHeroSelect }) => {
  return (
    <div className="hero-cards-container">
      <Row xs={1} md={2} lg={4} xl={4} className="g-4">
        {heroes.map((hero) => (
          <Col key={hero.name}>
            <Card
              className="bg-dark text-white"
              style={{ width: '150px', cursor: 'pointer' }}
              onClick={() => onHeroSelect(hero)}
            >
              <Card.Img src={hero.portrait} alt={hero.name} style={{ height: '100px', objectFit: 'cover' }} />
              <Card.ImgOverlay>
                <Card.Title style={{ fontSize: '14px' }}>{hero.name.toUpperCase()}</Card.Title>
                <Card.Text style={{ fontSize: '12px' }}>
                  Role: {hero.role.toUpperCase()}
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HeroCards;











import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HeroCards = ({ heroes, onHeroSelect }) => {
  return (
    <div className="hero-cards-container">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {heroes.map((hero) => (
          <Col key={hero.name} xs={2} sm={4} md={6} lg={10}>
            <Card
              className="heroCard text-white position-relative"
              style={{ width: '150px', cursor: 'pointer' }}
              onClick={() => onHeroSelect(hero)}
            >
              <Card.Img src={hero.portrait} alt={hero.name} style={{ height: '100px', objectFit: 'cover' }} />
              <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                <div className="text-left">
                  <Card.Title className="text-uppercase fw-bold fs-5 mb-0 text-white" style={{ fontStyle: 'italic' }}>
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




APP.jsx
return (
    <div className="app-container">
      <h1>Heroes</h1>
      <HeroCards heroes={heroes} onHeroSelect={handleHeroSelect} />

      <hr />

      <h2>Hero Abilities</h2>
      <Abilities selectedHero={selectedHero} />
    </div>
  );
};






const handleClick = (e) => {
  e.preventDefault();
    console.log(`You clicked the ${name} portrait.`);

    return (
      addEventListener('click', handleClick)
    );
  }
  
  
  //add here the scrolldown and



const HeroCards = ({ heroes, handleClick }) => {

  return (
    <div className="hero-cards-container">
      <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
        {heroes.map((hero) => (
          <Col key={hero.name}>
            <Card
              className="text-white bg-dark position-relative border border-warning"
              style={{ width: '160px', cursor: 'pointer' }}
              onClick={() => handleClick
              }
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
*/