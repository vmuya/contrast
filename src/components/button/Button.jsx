import React from 'react';

import './button.css';

const Button = (props) => {
  return (
    <button className="contrast__btn">
      <span className="contrast__btn-text">{props.btnText}</span>
    </button>
  );
};

export default Button;
