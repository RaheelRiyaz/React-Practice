import { NavLink } from "react-router-dom";
import "./Header.css";
import {  useState } from "react";

export default function Header() {
  const names = ["raheel", "burhan", "sahil"];
  const [name, setName] = useState(names[0]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="about"
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "text-primary" : ""}`;
                }}
                aria-current="page"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "text-primary" : ""}`;
                }}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                onClick={() =>
                  setName(names[Math.floor(Math.random() * names.length)])
                }
                to={`github/${name}`}
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "text-primary" : ""}`;
                }}
              >
                Github
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
