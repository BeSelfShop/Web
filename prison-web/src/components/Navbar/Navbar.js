import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand">Prison</h1>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <div className="nav-link">
                <NavLink to="/">Start</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <NavLink to="/prisoners">Lista więźniów</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <NavLink to="/cell">Lista Cel</NavLink>
              </div>
            </li>
          </ul>
          {props.user ? (
            <div className="auth-section-logout">
              <Link to="/logout">
                <button className="btn btn-outline-danger">Wyloguj</button>
              </Link>
            </div>
          ) : (
            <div className="auth-section">
              <Link to="/login">
                <button className="btn btn-outline-success login">
                  Logowanie
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline-warning">Rejestracja</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
