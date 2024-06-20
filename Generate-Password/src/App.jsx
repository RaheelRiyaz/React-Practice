import { useEffect, useState } from "react";
import "./App.css";
import CheckBox from "./Checkbox";
import Range from "./Range";
import Input from "./Input";
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
        <Input
          id="password"
          label="Password is"
          value={password}
          handler={null}
          disabled={true}
        />
      </div>
      <div className="controls">
        <Range
          id="range"
          min={min}
          max={max}
          value={length}
          handler={setLength}
        />
        <div>
          <CheckBox
            id="alphabets"
            checked={allowAlphabets}
            onChangeHandler={setallowAlphabets}
          />
        </div>

        <div>
          <CheckBox
            id="numeric"
            checked={allowNumeric}
            onChangeHandler={setallowNumeric}
          />
        </div>
        <div>
          <CheckBox
            id="uppercase"
            checked={allowUppercase}
            onChangeHandler={setallowUppercase}
          />
        </div>

        <div>
          <CheckBox
            id="symbols"
            checked={allowSymbols}
            onChangeHandler={setallowSymbols}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
