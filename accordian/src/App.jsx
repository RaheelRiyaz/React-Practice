import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [checkId, setSetCheckId] = useState(data[0].id);
  const [isSignleSelection, setSelection] = useState(true);
  const [selectedIds, setSelectedIds] = useState([data[0].id]);
  function handleClick(id) {
    if (isSignleSelection) {
      if (checkId === id) setSetCheckId(null);
      else setSetCheckId(id);
    } else {
      if (selectedIds.some((_) => _ === id))
        setSelectedIds((_) => _.filter((_) => _ !== id));
      else setSelectedIds((_) => [..._, id]);
    }
  }
  return (
    <div className="flex justify-center items-center flex-col gap-2 m-5">
      <button
        className={`text-white rounded-lg px-2 ${
          isSignleSelection ? "bg-gray-500" : "bg-green-300"
        }`}
        onClick={() => setSelection((_) => !_)}
      >
        Enable {isSignleSelection ? "multiple" : "single"} Selection
      </button>
      {data.map((d) => {
        return (
          <section
            key={d.id}
            className="bg-[#f6f6f6] w-50 h-auto rounded-md cursor-pointer"
            onClick={() => handleClick(d.id)}
          >
            <div className="accordian-item w-[300px] h-auto flex justify-between px-5">
              <p className="text-xl">{d.question}</p>
              <button className="text-lg">
                {(isSignleSelection && checkId === d.id) ||
                (!isSignleSelection && selectedIds.some((_) => _ === d.id))
                  ? "-"
                  : "+"}
              </button>
            </div>
            <p className="px-5">
              {(isSignleSelection && checkId === d.id) ||
              (!isSignleSelection && selectedIds.some((_) => _ === d.id))
                ? d.answer
                : ""}
            </p>
          </section>
        );
      })}
    </div>
  );
}

export default App;
