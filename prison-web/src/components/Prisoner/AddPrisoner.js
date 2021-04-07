import React, { Component } from "react";
import "./LoadCellComponent"
import LoadCellComponent from "./LoadCellComponent";


const API = "https://wiezienie2021.azurewebsites.net/";
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
    cells: [],
  };

  handleChange = (e) => {
    if (e.target.name === "behavior") {
      <LoadCellComponent />
      this.setState({
        [e.target.name]: e.target.value * 1,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  componentDidMount = () => {
    console.log("Success:");
    fetch(API + "api/PCells", {
      method: "GET",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {

        this.setState({
          cells: data
        })


      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  handleButton = () => {
    const data = this.state;
    console.log(JSON.stringify(data));
    fetch(API + "api/Prisoner", {
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
  handleCells = (e) => {
    this.setState({
      idCell: e.target.value * 1,
    });
  }
  mapCells = () => {
    return (
      <div>
        <h4>Cela:</h4>
        <select name="cellName" onChange={this.handleCells}>
          {this.state.cells.map((cell) => (
            <option key={cell.id} value={cell.id}>
              {cell.cellType.cellName} {cell.occupiedBeds}/{cell.bedsCount}
            </option>

          ))}
        ;
      </select>
      </div>
    );

  }
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
        <h3>Zachowanie:</h3>
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
        {this.mapCells()}
        <button className="loginButton" onClick={this.handleButton}>
          Dodaj więźnia
        </button>
      </div>
    );
  }
}

export default AddPrisoner;
