import React, { Component } from "react";

const API = "https://localhost:44333/api/Authentication/login";

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
    console.log(data);
    fetch(API, {
      method: "POST", // or 'PUT'
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.status !== 400) {
          localStorage.setItem("userStatus", true);
          localStorage.setItem(
            "user",
            data.userRoles === "Admin" ? data.userRoles : ""
          );
        }
        const test = this.state;
        console.log(test);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div>
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
        <button onClick={this.handleButton}>Zaloguj</button>
      </div>
    );
  }
}

export default Login;
