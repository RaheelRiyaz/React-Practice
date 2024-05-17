import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { MealStore } from "./store/MealStore.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={MealStore}>
    <App />
  </Provider>
);
