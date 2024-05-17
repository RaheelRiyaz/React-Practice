import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  favMeals: [],
  meals: [],
};

const MealSlice = createSlice({
  name: "Meal",
  initialState: initialState,
  reducers: {
    addToFavs: (state, action) => {
      const meal = action.payload;
      const isMealAdded = state.favMeals.some((m) => m.idMeal === meal.idMeal);
      if (!isMealAdded) {
        state.favMeals.push(meal);
        console.log("added");
      } else {
        alert("already in favs");
      }
    },
  },
});

export const { fetchmeals, addToFavs } = MealSlice.actions;
export const MealStore = configureStore({
  reducer: MealSlice.reducer,
});
