import React from 'react';
import Logo from '../../assets/ContrastLogo.svg';

import './footer.css';

const Footer = () => {
  return (
    <div className="contrast__footer section__margin">
      <div className="contrast__footer-content">
        <div className="contrast__footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="contrast__footer-text">
          <p>
            Explore a collection of 3400+ curated design resources, both free
            and paid, developers can use to create landing pages quicker.{' '}
          </p>
        </div>
      </div>
      <div className="contrast__footer-links">
        <div className="contrast__footer-links_div">
          <h4>Resources</h4>
          <p>Fonts</p>
          <p>Illustrations</p>
          <p>Mockups</p>
          <p>Icons</p>
          <p>Books</p>
        </div>
        <div className="contrast__footer-links_div">
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
        </div>
        <div className="contrast__footer-links_div">
          <h4>Support</h4>
          <p>FAQ</p>
          <p>Contact</p>
          <p>Mockups</p>
        </div>
        <div className="contrast__footer-links_div">
          <h4>Sponsor</h4>
          <p>Sponsor Resource</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
