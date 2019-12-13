import React from 'react';

const Button = ({ handleClick, buttonText, buttonClass, id }) => {
  return (
      <button className={buttonClass} type="button" onClick={handleClick} id={id}>{buttonText}</button>
  )
};

export default Button;