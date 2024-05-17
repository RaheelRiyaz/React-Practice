import { useDispatch, useSelector } from "react-redux";
import { addNote, removeNotetext, updateNote } from "../store/NoteStore";
import { useState, useEffect } from "react";

function Input() {
  const updateNoteText = useSelector((state) => state.updateNoteText);
  const [isEdit, setisEdit] = useState(false);
  const [note, setnote] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setnote(updateNoteText);
    if (updateNoteText) setisEdit(true);
  }, [updateNoteText]);

  function handleSubmit(e) {
    e.preventDefault();
    if (note) dispatch(addNote({ id: Date.now(), note ,isCompleted:false}));
    setnote("");
  }

  function handleUpdate(note) {
    dispatch(updateNote(note));
    dispatch(removeNotetext());
    setisEdit(false);
    setnote("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative md:w-[50%] ">
        <input
          type="text"
          id="default-search"
          className="block md:w-full w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write note here..."
          required
          value={note}
          onChange={(e) => setnote(e.target.value)}
        />

        {!isEdit ? (
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        ) : (
          <button
            onClick={() => handleUpdate(note)}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        )}
      </div>
    </form>
  );
}

export default Input;
