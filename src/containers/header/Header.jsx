import React from 'react';
import Logo from '../../assets/ContrastLogo.svg';

import './header.css';

const Header = () => {
  return (
    <div className="resources__header">
      <div className="resources__header-nav_left">
        <img src={Logo} alt="contrast logo" />
        <p>Browse</p>
      </div>
      <div className="resources__header-nav_right">
        <input type="text" placeholder="Search resource"></input>
        <button className="resources__header-nav_btn">
          <span>Submit resource</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
