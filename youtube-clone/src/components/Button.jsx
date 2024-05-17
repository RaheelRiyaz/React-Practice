/* eslint-disable react/prop-types */
// import React from 'react'

import { useDispatch } from "react-redux";
import { setInputValue } from "../store/store";

function Button({ btnText }) {
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(setInputValue(e.target.innerText));
  }
  return (
    <button onClick={handleClick} className="bg-teal-400 px-2 rounded-lg m-2">
      {btnText}
    </button>
  );
}

export default Button;
