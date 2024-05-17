import { useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(-1);
  const [rate, setRate] = useState(-1);

  function handleHover(i) {
    setIndex(i);
  }

  function handleOut() {
    setIndex(rate);
  }

  function handleClick(i) {
    setRate(i);
  }
  
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <i
              key={i}
              onMouseOver={() => handleHover(i)}
              onMouseOut={handleOut}
              onClick={() => handleClick(i)}
              className={`fa-regular fa-star fa-2x ms-2 cursor-pointer ${
                i <= index ? "active" : "inactive"
              }`}
            ></i>
          );
        })}
    </>
  );
}

export default App;
