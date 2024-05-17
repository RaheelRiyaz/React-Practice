import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showNavbar: true,
  inputValue: "american",
  loading: true,
};

export const slice = createSlice({
  name: "youtube",
  initialState: initialState,
  reducers: {
    hello: () => {
      console.log("hello");
    },
    setVal: (state) => {
      state.showNavbar = !state.showNavbar;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    youtube: slice.reducer,
  },
});

export const { hello, setVal, setInputValue, setLoading } = slice.actions;
