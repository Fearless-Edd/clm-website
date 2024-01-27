import React from 'react';

const PrimaryBtn = ({ title, textColor, bgColor }) => {
  const buttonStyle = {
    color: textColor,
    backgroundColor: bgColor,
  };

  return (
    <div>
      <button style={buttonStyle} className='font-bold p-2 px-3 rounded-lg'>{title}</button>
    </div>
  );
}

export default PrimaryBtn;
