import React, { Component } from 'react';
import config from "../../config.json"
import "./Cell.css"

class CellEdit extends Component {
    state = {
        bedsCount: 1,
        idCellType: 1,
        cellNumber: 1,
        id: 1
    }
    componentDidMount = () => {
        console.log(config.SERVER_URL + "api/PCells/" + this.props.id)
        fetch(config.SERVER_URL + "api/PCells/" + this.props.id, {
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
                    id: this.props.id,
                    bedsCount: data.bedsCount,
                    idCellType: data.idCellType,
                    cellNumber: data.cellNumber,
                })
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    handleButton = () => {
        const data = this.state;
        console.log(data)
        fetch(config.SERVER_URL + "api/PCells/" + this.props.id, {
            method: "PUT",

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
                    alert("Edytowano cele");
                    this.props.closePopup();
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value * 1,
        });
    };
    render() {
        return (<div className='popup'>
            <div className='popup_inner'>
                <div>
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
                </div>
                <label htmlFor="cellNumber">Numer celi:</label>
                <input
                    id="cellNumber"
                    type="text"
                    name="cellNumber"
                    value={this.state.cellNumber}
                    onChange={this.handleChange}
                />

                <button className="registerButton" onClick={this.handleButton}>
                    Edytuj cele
                </button>
                <button onClick={this.props.closePopup}>Zamknij</button>
            </div>
        </div>);
    }
}

export default CellEdit;