/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(6);
  const [numbersAllowed, setnumbersAllowed] = useState(false);
  const [lettersAllowed, setlettersAllowed] = useState(true);
  const [symbolsAllowed, setsymbolsAllowed] = useState(true);
  const [password, setpassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, lettersAllowed, symbolsAllowed]);

  const generatePassword = () => {
    let generatedPassword = "";
    let pattern = "";
    if (lettersAllowed) pattern += "abcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) pattern += "1234567890";
    if (symbolsAllowed) pattern += "@#$%^&*()_+!/<>~;''=";

    for (let index = 0; index < length; index++) {
      const randomIndex = Math.floor(Math.random() * pattern.length);
      generatedPassword += pattern.charAt(randomIndex);
    }
    setpassword(generatedPassword);
  };

  function handleCopy() {
    setIsCopied(true);
    navigator.clipboard.writeText(password);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <>
      <div className="password-container w-1/3 h-2/6 m-auto bg-gray-600 rounded-lg p-2 flex justify-start items-center flex-col gap-2">
        <h1 className="text-amber-100 shadow-md bg-gray-500 rounded-lg p-1 px-3 text-center text-xl">
          Password Generator
        </h1>
        <div className="input-box flex justify-center items-center">
          <input
            type="text"
            readOnly
            placeholder="Password"
            value={password}
            className="mt-2 border border-gray-50 bg-transparent px-4 rounded-tl-lg rounded-bl-lg py-2 outline-none w-full"
          />
          <button
          disabled={isCopied}
            className={`${!isCopied? 'bg-blue-900' :'bg-blue-700'}  text-gray-400 w-16 h-10 mt-2 rounded-tr-lg rounded-br-lg`}
            onClick={handleCopy}
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <input
            type="range"
            name=""
            id="length"
            className="cursor-pointer"
            value={length}
            min={4}
            max={30}
            onChange={(e) => setlength(e.target.value)}
          />
          <label htmlFor="length" className="text-white">
            Length is {length}
          </label>
        </div>

        <div className="check-boxes text-black flex justify-center items-center flex-wrap gap-3">
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              name=""
              id="numbers"
              checked={numbersAllowed}
              onChange={() => setnumbersAllowed((_) => !_)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              name=""
              id="letters"
              checked={lettersAllowed}
              onChange={() => setlettersAllowed((_) => !_)}
            />
            <label htmlFor="numbers">Letters</label>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              name=""
              id="symbols"
              checked={symbolsAllowed}
              onChange={() => setsymbolsAllowed((_) => !_)}
            />
            <label htmlFor="numbers">Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
