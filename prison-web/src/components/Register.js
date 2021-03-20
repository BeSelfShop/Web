import React, { Component } from "react";

const API = "https://localhost:44333/api/Authentication/register";

class Register extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    name: "",
    forname: "",
    inviteCode: "",
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
          alert("Zarejestrowano");
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
        <input
          type="text"
          placeholder="imie"
          name="name"
          className="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="nazwisko"
          name="forname"
          className="forname"
          value={this.state.forname}
          onChange={this.handleChange}
        />
        <input
          type="mail"
          placeholder="mail"
          name="email"
          className="mail"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="kod"
          name="inviteCode"
          className="code"
          value={this.state.inviteCode}
          onChange={this.handleChange}
        />
        <button onClick={this.handleButton}>Zarejestruj</button>
      </div>
    );
  }
}

export default Register;
