import { useState, useEffect } from "react";
function App() {
  const [isLettersAllowed, setIsLettersAllowed] = useState(true);
  const [isUpperCaseAllowed, setIsUpperCaseAllowed] = useState(false);
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false);
  const [isSymbolsAllowed, setIsSymbolsAllowed] = useState(false);
  const [length, setLength] = useState(10);

  const [password, setPassword] = useState("");

  useEffect(() => {
    let password = "";
    let generatedPassword = "";
    if (isLettersAllowed) password += "abcdefghijklmnopqrstuvwxyz";
    if (isUpperCaseAllowed) password += "ABSDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumbersAllowed) password += "0123456789";
    if (isSymbolsAllowed) password += "@#$%^&*()_+=|}{':;,./`~";

    for (let index = 0; index < length; index++) {
      const randomIndex = Math.floor(Math.random() * password.length);
      generatedPassword += password.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  }, [
    isNumbersAllowed,
    isLettersAllowed,
    isSymbolsAllowed,
    length,
    isUpperCaseAllowed,
  ]);

  function handleCopy() {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied");
    });
  }
  return (
    <>
      <input type="text" disabled value={password} />
      <button onClick={handleCopy}>Copy</button>
      <div className="options">
        <div>
          <input
            type="checkbox"
            onChange={() => setIsNumbersAllowed((_) => !_)}
            name="numbers"
            id="numbers"
            checked={isNumbersAllowed}
          />
          <label htmlFor="numbers">Add numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            checked={isSymbolsAllowed}
            onChange={() => setIsSymbolsAllowed((_) => !_)}
          />
          <label htmlFor="symbols">Add Symbols</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="letters"
            onChange={() => setIsLettersAllowed((_) => !_)}
            id="letters"
            checked={isLettersAllowed}
          />
          <label htmlFor="letters">Add Letters</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="letters"
            onChange={() => setIsUpperCaseAllowed((_) => !_)}
            id="letters"
            checked={isUpperCaseAllowed}
          />
          <label htmlFor="letters">Add Uppercases</label>
        </div>
        <div>
          <label htmlFor="length">Length is {length}</label>
          <input
            type="range"
            name="length"
            id="length"
            max={30}
            value={length}
            min={10}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
