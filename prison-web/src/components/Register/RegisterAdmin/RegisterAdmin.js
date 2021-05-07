import React, { Component } from "react";
import "./RegisterAdmin.css";
import FetchRegisterAdmin from "./../../../fetchData/Auth/FetchRegister"

class Register extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    name: "",
    forname: "",
    prisonName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleButton = () => {
    FetchRegisterAdmin(this.state)
  };

  render() {
    return (
      <div className="registerBox">
        <h1 className="registerH1">Rejestracja Więzienia</h1>
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
          type="email"
          placeholder="mail"
          name="email"
          className="mail"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Nazwa więzienia"
          name="prisonName"
          className="prisonName"
          value={this.state.inviteCode}
          onChange={this.handleChange}
        />
        <button className="registerButton" onClick={this.handleButton}>
          Zarejestruj
        </button>
      </div>
    );
  }
}

export default Register;
