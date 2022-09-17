import { useState } from 'react';
import Modal from '../../components/modal/Modal';
import Backdrop from '../../components/modal/Backdrop';
import Button from '../../components/button/Button';
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
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="contrast__hero section__margin">
        <div className="contrast__hero-content">
          <h1>Design resources for developers.</h1>
          <p>
            Explore a collection of 3400+ curated design resources, both free
            and paid, developers can use to create landing pages quicker.{' '}
          </p>
          <Button btnText="Submit Resource" onClick={openModalHandler} />
          <p className="contrast__hero-p">Used by individuals in: </p>
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
      {showModal && <Modal onClick={closeModalHandler} />}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </>
  );
};

export default Hero;
