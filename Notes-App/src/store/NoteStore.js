import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  notes: localStorage.getItem("react-notes")
    ? JSON.parse(localStorage.getItem("react-notes"))
    : [],
  updateNoteText: "",
  noteId: -1,
};

export const storeSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote: (state, note) => {
      state.notes.push(note.payload);
      localStorage.setItem("react-notes", JSON.stringify(state.notes));
    },

    removeNote: (state, note) => {
      const i = state.notes.indexOf(note.payload);
      state.notes.splice(i, 1);
      localStorage.setItem("react-notes", JSON.stringify(state.notes));
    },

    setNote: (state, action) => {
      state.updateNoteText = action.payload;
    },

    removeNotetext: (state) => {
      state.updateNoteText = "";
    },

    updateNote: (state, action) => {
      const i = state.notes.findIndex((note) => note.id == state.noteId);
      state.notes[i].note = action.payload;
      localStorage.setItem("react-notes", JSON.stringify(state.notes));
    },

    setNoteId: (state, action) => {
      state.noteId = action.payload;
    },

    toggleStatus: (state, action) => {
      const index = state.notes.findIndex((_) => _.id === action.payload);
      state.notes[index].isCompleted = !state.notes[index].isCompleted;
      localStorage.setItem("react-notes", JSON.stringify(state.notes));
    },
  },
});

export const {
  addNote,
  removeNote,
  setNote,
  removeNotetext,
  updateNote,
  setNoteId,
  toggleStatus
} = storeSlice.actions;
export const reducers = storeSlice.reducer;

export const store = configureStore({
  reducer: reducers,
});
