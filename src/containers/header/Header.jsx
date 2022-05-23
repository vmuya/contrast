import React from 'react';
import Logo from '../../assets/ContrastLogo.svg';

import './header.css';

const Header = () => {
  return (
    <div className="contrast__header">
      <div className="contrast__header-nav_left">
        <img src={Logo} alt="contrast logo" />
        <p>Browse</p>
      </div>
      <div className="contrast__header-nav_right">
        <input type="text" placeholder="🔍 Search resource"></input>
        <button className="contrast__header-nav_btn">
          <span>Submit resource</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
