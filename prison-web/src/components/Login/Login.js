import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router";
import config from "../../config.json"
import FacebookLogin from "./FacebookLogin"


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
    const data = this.state;
    fetch(config.SERVER_URL + "api/Authentication/login", {
      method: "POST", // or 'PUT'
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token != null) {
          const user = JSON.stringify(data);

          localStorage.setItem("roles", data.roles);
          localStorage.setItem("token", data.token);
          this.props.setUser(user, data.roles);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            <FacebookLogin />
          </div>
        )}
      </div>
    );
  }
}

export default Login;
