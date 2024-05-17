import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./user/components/Home/Home.jsx";
import Hotels from "./user/components/Hotels/Hotels.jsx";
import Cabs from "./user/components/Cabs/Cabs.jsx";
import PackagesComponent from "./user/components/Packages/Packages.jsx";
import PackageDetails from "./user/components/Packages/PackageDetails.jsx";
import Admin from "./admin/Admin.jsx";
import Packages from "./admin/pages/Packages.jsx";
import AddPackage from "./admin/pages/AddPackage.jsx";
import Login from "./user/components/Login.jsx";

const routes = createBrowserRouter([
  {path:"login", element: <Login />},
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "cabs",
        element: <Cabs />,
      },
      {
        path: "packages",
        children: [
          { path: "", element: <PackagesComponent /> },
          { path: "details/:id", element: <PackageDetails /> },
        ],
      },
    ],
  },

  {
    path: "admin",
    element:  <Admin />,
    children: [
      {
        path: "packages",
        children: [
          { path: "", element: <Packages /> },
          { path: "add", element: <AddPackage /> },
        ],
      },
      { path: "", element: <Navigate to={"/admin/packages"} /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={routes} />
  // </React.StrictMode>,
);
