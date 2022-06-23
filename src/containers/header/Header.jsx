import React, { useState } from 'react';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/ContrastLogo.svg';

import './header.css';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="contrast__header">
      <div className="contrast__header-nav_left">
        <img src={Logo} alt="contrast logo" />
        <p>Browse</p>
      </div>
      <div className="contrast__header-nav_right">
        <input
          className="contrast__header-nav_input"
          type="text"
          placeholder="🔍 Search resource"
        ></input>
        <button className="contrast__header-nav_btn">
          <span>Submit resource</span>
        </button>
      </div>
      <div className="contrast__header-nav_menu">
        {toggleMenu ? (
          <RiCloseLine
            color="##4D13D1"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuFill
            color="#4D13D1"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="contrast__header-navmenu_container scale-up-center">
            <input
              className="contrast__header-nav_input"
              type="text"
              placeholder="🔍 Search resource"
            ></input>
            <button className="contrast__header-nav_btn">
              <span>Submit resource</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
