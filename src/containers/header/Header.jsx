import { useState } from 'react';
import Modal from '../../components/modal/Modal';
import Backdrop from '../../components/modal/Backdrop';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Logo from '../../assets/ContrastLogo.svg';

import './header.css';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="contrast__header">
      <div className="contrast__header-nav_left">
        <Link to="/">
          <img src={Logo} alt="contrast logo" />
        </Link>
        <Link to="/browse">
          <p>Browse</p>
        </Link>
      </div>
      <div className="contrast__header-nav_right">
        <input
          className="contrast__header-nav_input"
          type="text"
          placeholder="🔍 Search resource"
        ></input>
        <Button btnText="Submit Resource" onClick={openModalHandler} />
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
            <Button btnText="Submit Resource" onClick={openModalHandler} />
          </div>
        )}
      </div>
      {showModal && <Modal onClick={closeModalHandler} />}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
};

export default Header;
