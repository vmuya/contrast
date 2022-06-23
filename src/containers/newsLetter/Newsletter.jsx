import React from 'react';
import PeepsImg from '../../assets/Peeps.svg';

import './newsletter.css';

const Newsletter = () => {
  return (
    <div className="contrast__newsletter">
      <div className="contrast__newsletter-content">
        <h3>Receive design resources every week. Straight to your inbox.</h3>

        <p>
          Discover dozens of design resources each week from educational
          material to illustrations.
        </p>

        <div className="contrast__newsletter-email_box">
          <input type="text" placeholder="john@example.com"></input>
          <button className="contrast__newsletter-button">
            <span className="contrast__newsletter-btn_text">Subscribe</span>
          </button>
        </div>

        <p>*No spam, unsubscribe anytime.</p>
      </div>
      <div className="contrast__newsletter-image">
        <img className="contrast__newsletter-img" src={PeepsImg} alt="People" />
      </div>
    </div>
  );
};

export default Newsletter;
