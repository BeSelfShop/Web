import React, { Component } from "react";
const API = "https://wiezienie2021.azurewebsites.net/api/PCells";

class Cell extends Component {
  state = {
    beds: 1,
    idCellType: 1,
    cells: [],
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
        if (data.status === 200) {
          alert("Dodano cele");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  componentDidMount = () => {
    fetch("https://wiezienie2021.azurewebsites.net/api/CellType", {
      method: "GET", // or 'PUT'

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          cells: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  displayCellsType = () => {
    return (
      <select name="cellName" onChange={this.handleCellsType}>
        {this.state.cells.map((cell) => (
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
  handleBedChange = (e) => {
    this.setState({
      beds: e.target.value * 1,
    });
  };
  render() {
    return (
      <div className="registerBox">
        <h1 className="registerH1">Tworzenie cel</h1>
        <label htmlFor="beds">Ilość łóżek (1-10):</label>
        <input
          id="beds"
          type="number"
          name="beds"
          min="1"
          max="10"
          value={this.state.beds}
          onChange={this.handleBedChange}
        />
        <label htmlFor="cellType">Wybierz typ celi:</label>
        {this.displayCellsType()}

        <button className="registerButton" onClick={this.handleButton}>
          Utwórz cele
        </button>
      </div>
    );
  }
}

export default Cell;
