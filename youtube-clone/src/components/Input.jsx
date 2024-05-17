/* eslint-disable react/prop-types */
// import React from 'react'

function Input({ type = 'text', placeHolder='Search', className, handleChange, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={className}
      onChange={handleChange}
      {...props}
    />
  );
}

export default Input;
