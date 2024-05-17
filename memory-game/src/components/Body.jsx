import Card from "./Card";
import Timer from "./Timer";
import { Context } from "../context/Context";
import { useEffect, useRef, useState } from "react";
function Body() {
  const [indexes, setIndexes] = useState([]);
  const [showRestart, setShowRestart] = useState(false);
  let nums = useRef([]);
  let elements = useRef([]);
  let clicked = useRef(0);
  let moves = useRef(0);
  // eslint-disable-next-line no-unused-vars
  const [array, setArray] = useState([1, 2, 3, 1, 2, 4, 5, 6, 3, 6, 5, 4]);

  useEffect(() => {
    shuffleArray();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showRestart]);

  function shuffleArray() {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
  }

  function handler(index) {
    moves.current = moves.current + 1;
    clicked.current = clicked.current + 1;
    nums.current.push(index);
    elements.current.push(index);
    setIndexes((_) => [..._, index]);

    if (clicked.current === 2) {
      const [first, second] = elements.current;
      if (array[first] !== array[second]) {
        const filteredIndexes = nums.current.filter(
          (num) => num !== first && num !== second
        );
        setTimeout(() => {
          setIndexes([...filteredIndexes]);
          nums.current = [...filteredIndexes];
        }, 200);
      }
      // Reset
      setTimeout(() => {
        if (nums.current.length === array.length) {
          nums.current = [];
          setIndexes([]);
          moves.current = 0;
          setShowRestart(true);
        }
      }, 200);
      clicked.current = 0;
      elements.current = [];

      // console.log(nums.current.length);
      // Reset
    }
  }

  return (
    <Context.Provider value={{ indexes, moves }}>
      <div className="flex justify-center items-center h-screen">
        <div className="h-[400px] w-[470px] rounded-lg flex flex-col">
          <div className="timer w-full bg-gray-50 p-2 flex justify-end items-center">
            <Timer moves={moves.current} />
          </div>
          <div className="cards flex flex-wrap bg-gray-300 h-full">
            {!showRestart ? (
              array.map((_, i) => (
                <Card
                  handler={handler}
                  number={_}
                  index={i}
                  background={_}
                  key={i}
                />
              ))
            ) : (
              <button
                className="bg-black text-white mx-auto p-2 rounded-lg h-10 my-auto"
                onClick={() => setShowRestart(false)}
              >
                Restart
              </button>
            )}
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default Body;
