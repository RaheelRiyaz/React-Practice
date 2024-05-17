import { configureStore, createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "weather-store",
  initialState: {
    isLoading: false,
    error: "",
    term: "",
    result: null,
  },
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setResult:(state,action)=>{
      state.result = action.payload;
    }
  },
});

const store = configureStore({
  reducer: {
    weather: storeSlice.reducer,
  },
});

export const { setTerm, setLoading, setError, setResult } = storeSlice.actions;

export default store;
