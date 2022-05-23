import React from 'react';
import Google from '../../assets/GoogleLogo.svg';
import Discord from '../../assets/DiscordLogo.svg';
import Slack from '../../assets/SlackLogo.svg';
import Twitter from '../../assets/TwitterLogo.svg';
import HeroImage from '../../assets/HeroImage.png';

import './hero.css';

const logos = [
  {
    src: Google,
    name: 'Google',
  },
  {
    src: Discord,
    name: 'Discord',
  },
  {
    src: Slack,
    name: 'Slack',
  },
  {
    src: Twitter,
    name: 'Twitter',
  },
];

const Hero = () => {
  return (
    <div className="contrast__hero section__margin">
      <div className="contrast__hero-content">
        <h1>Design resources for developers.</h1>
        <p>
          Explore a collection of 3400+ curated design resources, both free and
          paid, developers can use to create landing pages quicker.{' '}
        </p>
        <button className="contrast__hero-btn">
          <span>Submit resource</span>
        </button>
        <p>Used by individuals in: </p>
        <div className="contrast__hero-logos">
          {logos.map((logo, index) => (
            <img src={logo.src} alt={logo.name} key={index} />
          ))}
        </div>
      </div>
      <div className="contrast__hero-image">
        <img src={HeroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
