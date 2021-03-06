import React, { Component } from 'react';
import "./Cell.css"
import CellEdit from './CellEdit';
import GetAllCells from "../../fetchData/Cells/GetAllCells";
import DeleteCell from "../../fetchData/Cells/DeleteCell";
import { Link } from "react-router-dom";

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
    setCells = (cells) => {
        this.setState({
            cells
        })
    }
    componentDidMount = () => {
        GetAllCells(this.setCells)
    }
    deleteCell = (id) => {
        let deleteProps = { state: this.state.cells, setCells: this.setCells, cellId: id }
        DeleteCell(deleteProps)
    }

    handleCells = () => {
        return (
            <div className="cellBox">
                <table>
                    <tbody>
                        <tr className="headerTable">
                            <td>Numer:</td>
                            <td>Ilość miejsc:</td>
                            <td>Ilość zajętych miejsc:</td>
                            <td>Typ celi:</td>
                            {this.props.role === "Admin" ? <td>Akcja:</td> : null}
                        </tr>
                        {this.state.cells.map((cell) => (
                            <tr id={cell.id} key={cell.id}>
                                <td>{cell.cellNumber}</td>
                                <td>{cell.bedsCount}</td>
                                <td>{cell.occupiedBeds}</td>
                                <td>{cell.cellType.cellName}</td>
                                {this.props.role === "Admin"
                                    ? (
                                        <td><button className="deleteButton" id={cell.id} onClick={() => { this.deleteCell(cell.id) }}>Usuń</button>
                                            <button onClick={() => { this.togglePopup(cell.id) }}>Edytuj</button>
                                            {this.state.showPopup
                                                ? <CellEdit
                                                    id={this.state.cellId}
                                                    closePopup={this.togglePopup}
                                                    refreshList={() => GetAllCells(this.setCells)}
                                                />
                                                : null
                                            }</td>)
                                    : null}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        )
    }
    render() {
        return (<div className="cell-main">
            <h1>Lista cel:</h1>
            {this.handleCells()}
            {this.props.role === "Admin" ? (<div>
                <Link to="/addCell">
                    <button className="add">Dodaj cele</button>
                </Link>
            </div>) : null}

        </div >);
    }
}

export default CellList;