import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import HeroCards from './heroCardsUnofficial';

const Abilities = ({ selectedHero }) => {
  const [cooldown, setCooldown] = useState(0);
  const [cooldownIntervalId, setCooldownIntervalId] = useState(null);
  const { abilities } = selectedHero;

  const startAbility = () => {
          if (cooldown > 0) return;

    setCooldown(6); 

    const intervalId = setInterval(() => {
            setCooldown((prevCooldown) => (prevCooldown > 0 ? prevCooldown - 1 : 0));
          }, 1000);

          setCooldownIntervalId(intervalId);
  };

  useEffect(() => {
    // Clean up function
    return () => {
      if (cooldownIntervalId) clearInterval(cooldownIntervalId);
    };
  }, [cooldownIntervalId]);

  const handleButtonClick = () => {
    // Prevent button click during cooldown
    if (cooldown > 0) return;
    startAbility();
  };

  // I got this whole timer from online 

  const renderCircularTimer = () => {
    const radius = 40; 
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = ((6 - cooldown) / 6) * circumference;

    return (
      <svg width={2 * radius} height={2 * radius}>
        <circle
          r={radius}
          cx={radius}
          cy={radius}
          fill="transparent"
          stroke="#007bff"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    );
  };

  return (
    <div className="hero-abilities-container">
      <Row xs={1} sm={1} md={2} lg={3} xl={5} className="g-4">
          {selectedHero.abilities.map((ability, index) => (
            <Col key={index}>
              <Card className="bg-dark text-white">
            <Card.Img src={ability.icon} alt={ability.description} />
            <Card.Body>
              <Card.Title>{ability.name}</Card.Title>
              {hero.abilities.map((ability, index) => (
                <div key={index} className="ability-card">
                  <hr />
                  <Card.Title>{ability.name}</Card.Title>
                  <Card.Text>{ability.description}</Card.Text>

                  <Button onClick={handleButtonClick} disabled={cooldown > 0}>
                    {cooldown > 0 ? renderCircularTimer() : 'Use Ability'}
                  </Button>
                </div>
              ))}
            </Card.Body>
          </Card>
          </Col>
          ))}
      </Row>

    </div>
  );
};

export default Abilities;

/* 

The ultimate purpose of this component is to pull up a specific hero's abilities once clicking on their portrait
in the HeroCards list. I attempted to create new cards based on the unique hero abilities as detailed in the API
as fetched in the HeroCards component. 

Then, upon clicking a card (with an icon and description), it should trigger a cooldown timer in the form of a
circle, which you can not click to activate again until the timer is expired.

Obviously this still needs a lot of work, but that is what I was going for!

*/