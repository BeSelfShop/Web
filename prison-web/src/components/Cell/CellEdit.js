import React, { Component } from 'react';
import "./Cell.css"
import PutCell from "../../fetchData/Cells/PutCell"
import GetCell from "../../fetchData/Cells/GetCell"


class CellEdit extends Component {
    state = {
        bedsCount: 1,
        idCellType: 1,
        cellNumber: 1,
    }
    componentDidMount = () => {
        let getCell = { setCell: this.setCell, id: this.props.id }
        GetCell(getCell)
    }
    setCell = (data) => {
        this.setState({
            bedsCount: data.bedsCount,
            idCellType: data.idCellType,
            cellNumber: data.cellNumber,
        })
    }
    handleButton = () => {
        const { id, refreshList, closePopup } = this.props
        let cell = { id: id, refreshList: refreshList, closePopup: closePopup, data: this.state }
        PutCell(cell)
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