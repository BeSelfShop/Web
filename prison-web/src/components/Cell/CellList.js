import React, { Component } from 'react';


const API = "https://wiezienie2021.azurewebsites.net/";

class CellList extends Component {
    state = {
        cells: [],
    }
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
                console.log(this.state.cells)

            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    deleteCell = (id) => {
        console.log(id)
        fetch(API + "api/PCells/" + id, {
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
                var idx = cells.findIndex(item => item.id === id);
                cells.splice(idx, 1);
                this.setState({ cells })
            })
            .then(res => console.log(res))
    }
    handleCells = () => {
        console.log(this.state.cells)
        return (
            <div>
                <table>
                    <tbody>
                        <tr style={{ border: "3px solid #3498db" }}>
                            <td>Numer:</td>
                            <td>Ilość miejsc:</td>
                            <td>Ilość zajętych miejsc:</td>
                            <td>Typ celi:</td>
                            <td>Akcja:</td>
                        </tr>
                        {this.state.cells.map((cell) => (
                            <tr key={cell.id} style={{ border: "3px solid #3498db" }}>
                                <td>{cell.cellNumber}</td>
                                <td>{cell.bedsCount}</td>
                                <td>{cell.occupiedBeds}</td>
                                <td>{cell.cellType.cellName}</td>
                                <td><button onClick={() => { this.deleteCell(cell.id) }}>Usuń</button>
                                    <button>Edytuj</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        )
    }
    render() {
        return (<div>
            <h1>Heheh</h1>
            <h1>Heheh</h1>
            {this.handleCells()}
        </div >);
    }
}
export default CellList;