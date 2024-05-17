import { useDispatch } from "react-redux";
import { addTodo } from "../reducer/todoSlicer";
import { useState } from "react";

function AddTodo() {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");

  const addTodoItem = () => {
    if (!note) return;
    dispatch(addTodo(note));
    setNote("");
  };

  addTodo;
  return (
    <div>
      <input
        className="bg-black text-white focus:text-white"
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={addTodoItem}>Add todo</button>
    </div>
  );
}

export default AddTodo;
