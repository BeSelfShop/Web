import React, { Component } from "react";
const API = "https://localhost:44333/api/Prisoner";
class AddPrisoner extends Component {
  state = {
    name: "",
    forname: "",
    pesel: "",
    address: "",
    pass: false,
    behavior: 0,
    isolated: false,
    idCell: 1,
  };
  handleChange = (e) => {
    if (e.target.name === "behavior") {
      this.setState({
        [e.target.name]: e.target.value * 1,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  handleButton = () => {
    const data = this.state;
    console.log(JSON.stringify(data));
    fetch(API, {
      method: "POST", // or 'PUT'

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.statusCode === 200) {
          alert("Dodano więźnia");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  render() {
    return (
      <div className="loginBox">
        <h1 className="loginH1">Dodawanie nowego więźnia</h1>
        <input
          type="text"
          name="name"
          placeholder="Imię"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Nazwisko"
          name="forname"
          value={this.state.forname}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="pesel"
          placeholder="Pesel"
          value={this.state.pesel}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Adres"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <select name="behavior" onChange={this.handleChange}>
          <option key="1" value="1">
            1
          </option>
          <option key="2" value="2">
            2
          </option>
          <option key="3" value="3">
            3
          </option>
          <option key="4" value="4">
            4
          </option>
          <option key="5" value="5">
            5
          </option>
        </select>
        <button className="loginButton" onClick={this.handleButton}>
          Dodaj więźnia
        </button>
      </div>
    );
  }
}

export default AddPrisoner;
