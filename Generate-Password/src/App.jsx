import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [allowAlphabets, setallowAlphabets] = useState(true);
  const [allowNumeric, setallowNumeric] = useState(false);
  const [allowSymbols, setallowSymbols] = useState(false);
  const [allowUppercase, setallowUppercase] = useState(false);
  let max = 30;
  let min = 5;
  useEffect(() => {
    if (!allowAlphabets && !allowNumeric && !allowAlphabets && !allowUppercase)
      return;

    let string = "";
    if (allowAlphabets) string += "abcdefghijklmnopqrstuvwxyz";

    if (allowNumeric) string += "1234567890";

    if (allowUppercase) string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (allowSymbols) string += "~!@$^#&*()_=+?/>,.|";

    let password = "";

    for (let index = 0; index < length; index++) {
      const randomNumber = Math.floor(Math.random() * string.length);
      password += string[randomNumber];
    }
    setPassword(password);
  }, [length, allowAlphabets, allowNumeric, allowSymbols, allowUppercase]);

  return (
    <div>
      <div className="header">
        <input type="text" disabled value={password} />
      </div>
      <div className="controls">
        <input
          type="range"
          name="length"
          id=""
          min={min}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          max={max}
        />
        <b>Length is {length}</b>
        <div>
          <label htmlFor="alphabets">Allow Alphabets</label>
          <input
            type="checkbox"
            name="alphabets"
            id="alphabets"
            checked={allowAlphabets}
            onChange={() => {
              setallowAlphabets(!allowAlphabets);
            }}
          />
        </div>

        <div>
          <label htmlFor="alphabets">Allow Uppercase</label>
          <input
            type="checkbox"
            name="uppercase"
            id="uppercase"
            checked={allowUppercase}
            onChange={() => {
              setallowUppercase(!allowUppercase);
            }}
          />
        </div>
        <div>
          <label htmlFor="numeric">Allow Numeric</label>
          <input
            type="checkbox"
            name="numeric"
            id="numeric"
            checked={allowNumeric}
            onChange={() => {
              setallowNumeric(!allowNumeric);
            }}
          />
        </div>

        <div>
          <label htmlFor="symbols">Allow Symbols</label>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            checked={allowSymbols}
            onChange={() => {
              setallowSymbols(!allowSymbols);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
