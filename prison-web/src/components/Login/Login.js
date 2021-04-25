import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router";
import FetchLogin from "./../../fetchData/Auth/FetchLogin"


class Login extends Component {
  state = {
    userName: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleButton = () => {
    let login = { data: this.state, setUser: this.props.setUser }
    FetchLogin(login)
  };

  render() {
    return (
      <div>
        {this.props.user && this.state.authorized !== true ? (
          <Redirect to="/" />
        ) : (
          <div className="loginBox">
            <h1 className="loginH1">Logowanie</h1>
            <input
              type="text"
              name="userName"
              placeholder="login"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="hasło"
              name="password"
              className="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="loginButton" onClick={this.handleButton}>
              Zaloguj
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
