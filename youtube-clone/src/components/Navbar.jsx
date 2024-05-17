// import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineVideoCall } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import Input from "../components/Input";
import { RxAvatar } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setVal, setInputValue } from "../store/store";
import { useState } from "react";

function Navbar() {
  const [inputBox, setinputBox] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setVal());
  }

  function handleInput() {
    dispatch(setInputValue(inputBox));
    setinputBox("");
  }
  
  return (
    <nav className="h-12 w-full flex justify-between items-center md:p-5 py-7">
      <div className="first flex justify-center items-center gap-2 md:gap-5 md:ms-2 ms-1">
        <RxHamburgerMenu
          className="cursor-pointer hover:text-gray-500"
          onClick={handleClick}
        />
        <div className="flex justify-center items-center gap-1">
          <FaYoutube className="text-red-400 text:xl md:text-3xl cursor-pointer hover:text-red-400" />
          <h1 className="text-lg md:text-xl text-black font-bold">Youtube</h1>
        </div>
      </div>
      <div className="second ms-3 me-3">
        <div className="search-box w-fit flex justify-center items-center">
          <Input
            type="serach"
            className={`w-44 md:w-96 rounded-tl-2xl rounded-bl-2xl py-1 px-3 border border-gray-200 outline-none`}
            value={inputBox}
            handleChange={(e) => setinputBox(e.target.value)}
          />
          <div className="search-icon border bg-gray-100 h-8 flex justify-center items-center p-4 border-gray-200 rounded-tr-2xl rounded-br-2xl">
            <CiSearch
              className="text-xl cursor-pointer"
              onClick={handleInput}
            />
          </div>
        </div>
      </div>
      <div className="third flex justify-center items-center md:gap-3 gap-2 me-1 text-xl md:text-2xl md:me-4">
        <MdOutlineVideoCall />
        <CiBellOn />
        <RxAvatar />
      </div>
    </nav>
  );
}

export default Navbar;
