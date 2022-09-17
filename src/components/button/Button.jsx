import React from 'react';

import './button.css';

const Button = (props) => {
  const buttonClicked = () => {
    props.onClick();
  };

  return (
    <button className="contrast__btn" onClick={buttonClicked}>
      <span className="contrast__btn-text">{props.btnText}</span>
    </button>
  );
};

export default Button;
