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
                <NavLink to="/">Prison</NavLink>
              </div>
            </li>{" "}
            <li className="nav-item">
              <div className="nav-link">
                <NavLink to="/">Test</NavLink>
              </div>
            </li>
          </ul>
          {props.user ? (
            <Link to="/logout">
              <button class="btn btn-outline-danger">Wyloguj</button>
            </Link>
          ) : (
            <div>
              <Link to="/login">
                <button class="btn btn-outline-primary">Logowanie</button>
              </Link>
              <Link to="/register">
                <button class="btn btn-outline-primary">Rejestracja</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
/*<Link to="/register">
<button class="btn btn-outline-primary">Rejestracja</button>
</Link>
<Link to="/login">
<button class="btn btn-outline-primary">Logowanie</button>
</Link>*/
