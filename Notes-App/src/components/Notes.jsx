import { useDispatch, useSelector } from "react-redux";
import {
  removeNote,
  setNote,
  setNoteId,
  toggleStatus,
} from "../store/NoteStore";

function Notes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  function handleDelete(note) {
    dispatch(removeNote(note));
  }

  function handleEdit(note) {
    dispatch(setNote(note.note));
    dispatch(setNoteId(note.id));
  }

  function handleCheckbox(id) {
    dispatch(toggleStatus(id));
  }


  return (
    <div>
      {notes && notes.length > 0
        ? notes.map((note) => {
            return (
              <div
                className="flex bg-gray-200 m-3 p-3 rounded-md shadow-xl dark:bg-gray-900 justify-between items-center w-[70%] mx-auto"
                key={note.id}
              >
                <div className="flex gap-2">
                  <input
                    onChange={() => handleCheckbox(note.id)}
                    type="checkbox"
                    name=""
                    className="cursor-pointer"
                    id=""
                    checked={note.isCompleted}
                  />
                  <p className={`dark:text-white ${note.isCompleted ? 'line-through':''}`}>{note.note}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(note)}
                    className="bg-red-400 text-white rounded-md text-xs p-2"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleEdit(note)}
                    className="bg-blue-500 p-2 rounded-md text-xs text-white"
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })
        : (<p className="mt-3 text-gray-500 dark:text-blue-400 text-2xl text-center font-bold">Please add a note +</p>)}
    </div>
  );
}

export default Notes;
