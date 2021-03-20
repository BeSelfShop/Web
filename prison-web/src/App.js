import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Prison from "./components/Prison";
import Register from "./components/Register";
import React, { Component } from "react";

class App extends Component {
  state = {
    user: "",
    rememberMe: false,
  };
  componentDidMount = () => {
    const rememberMe = localStorage.getItem("userStatus");
    console.log(rememberMe);
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  };

  render() {
    return (
      <div className="Main">
        <Router>
          {this.state.rememberMe ? (
            <div>Zalogowany jako {this.state.user}</div>
          ) : (
            <div>Bla</div>
          )}

          <NavLink to="/">Start</NavLink>
          <NavLink to="/login">Logowanie</NavLink>
          <NavLink to="/register">Rejestracja</NavLink>
          <Route path="/" exact component={Prison} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
      </div>
    );
  }
}

export default App;
