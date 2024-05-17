import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Github from "./components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Hero />,
      },
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "github/:name",
        element: <Github />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
