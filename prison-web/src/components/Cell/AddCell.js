import React, { Component } from "react";
import config from "../../config.json"
import "./Cell.css"
import GetAllCellTypes from "../../fetchData/CellTypes/GetAllCellTypes";


class Cell extends Component {
  state = {
    bedsCount: 1,
    idCellType: 1,
    cellNumber: 1,
    cellTypes: [],
  };
  handleButton = () => {
    const data = this.state;
    fetch(config.SERVER_URL + "api/PCells", {
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
        if (data.statusCode === 200) {
          alert("Dodano cele");
          this.setState({
            bedsCount: 1,
            idCellType: 1,
            cellNumber: 1,
          })
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  setCellTypes = (cellTypes) => {
    this.setState({
      cellTypes
    })
  }

  componentDidMount = () => {
    GetAllCellTypes(this.setCellTypes)
  };
  displayCellsType = () => {
    return (
      <select name="cellName" onChange={this.handleCellsType}>

        {this.state.cellTypes.map((cell) => (
          <option key={cell.id} value={cell.id}>
            {cell.cellName}
          </option>
        ))}
        ;
      </select>
    );
  };
  handleCellsType = (e) => {
    this.setState({
      idCellType: e.target.value * 1,
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value * 1,
    });
  };
  render() {
    return (
      <div className="registerBox">
        <h1 className="registerH1">Tworzenie cel</h1>
        <label htmlFor="bedsCount">Ilość łóżek (1-10):</label>
        <input
          id="bedsCount"
          type="number"
          name="bedsCount"
          min="1"
          max="10"
          value={this.state.bedsCount}
          onChange={this.handleChange}
        />
        <label htmlFor="cellNumber">Numer celi:</label>
        <input
          id="cellNumber"
          type="text"
          name="cellNumber"
          value={this.state.cellNumber}
          onChange={this.handleChange}
        />

        <h3>Wybierz typ celi:</h3>
        {this.displayCellsType()}

        <button className="registerButton" onClick={this.handleButton}>
          Utwórz cele
        </button>
      </div>
    );
  }
}

export default Cell;
