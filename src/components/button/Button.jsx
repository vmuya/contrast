import React from 'react';

import './button.css';

const Button = ({ btnText }) => {
  return (
    <button className="contrast__btn">
      <span className="contrast__btn-text">{btnText}</span>
    </button>
  );
};

export default Button;
