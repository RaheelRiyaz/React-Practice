/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Context } from "../context/Context";

function Card({ number, index, handler }) {
  const { indexes } = useContext(Context);

  return (
    <button
      disabled={indexes.some((_) => _ == index)}
      onClick={() => handler(index)}
      className="flex  border border-black justify-center items-center  rounded-lg cursor-pointer h-[100px] m-2 w-[100px] ${
      "
    >
      <span className={`${!indexes.some((_) => _ == index) ? "hidden" : ""} `}>
        {number}
      </span>
    </button>
  );
}

export default Card;
