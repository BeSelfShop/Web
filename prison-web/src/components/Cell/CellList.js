import React, { Component } from 'react';
import config from "../../config.json"
import "./CellEdit"
import "./Cell.css"
import CellEdit from './CellEdit';
class CellList extends Component {
    state = {
        cells: [],
        showPopup: false,
        cellId: null
    }
    togglePopup = (id) => {
        this.setState({
            showPopup: !this.state.showPopup,
            cellId: id
        });
    }
    componentDidMount = () => {
        fetch(config.SERVER_URL + "api/PCells", {
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
                console.log(this.state.cells)

            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    deleteCell = (id) => {
        console.log(id)
        fetch(config.SERVER_URL + "api/PCells/" + id, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then(res => {
                res.json()
                var cells = [...this.state.cells];
                var deletedCells = cells.findIndex(item => item.id === id);
                cells.splice(deletedCells, 1);
                this.setState({ cells })
            })
            .then(res => console.log(res))
    }

    handleCells = () => {
        return (
            <div>
                <table>
                    <tbody>
                        <tr className="headerTable">
                            <td>Numer:</td>
                            <td>Ilość miejsc:</td>
                            <td>Ilość zajętych miejsc:</td>
                            <td>Typ celi:</td>
                            <td>Akcja:</td>
                        </tr>
                        {this.state.cells.map((cell) => (
                            <tr key={cell.id}>
                                <td>{cell.cellNumber}</td>
                                <td>{cell.bedsCount}</td>
                                <td>{cell.occupiedBeds}</td>
                                <td>{cell.cellType.cellName}</td>
                                <td><button className="deleteButton" id={cell.id} onClick={() => { this.deleteCell(cell.id) }}>Usuń</button>
                                    <button onClick={() => { this.togglePopup(cell.id) }}>Edytuj</button>
                                    {this.state.showPopup ?
                                        <CellEdit
                                            id={this.state.cellId}
                                            closePopup={this.togglePopup}
                                        />
                                        : null
                                    }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        )
    }
    render() {
        return (<div className="cellBox">
            <h1>Lista cel:</h1>
            {this.handleCells()}
        </div >);
    }
}

export default CellList;