import config from "../../config.json"
import React, { Component } from 'react';

class DeletePrisoner extends Component {

    handleDelate = () => {
        var prisoners = [...this.props.prisoners]


        fetch(config.SERVER_URL + "api/Prisoner/" + this.props.id, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then(res => {
                res.json()
                var deletedCells = prisoners.findIndex(item => item.id === this.props.id);
                prisoners.splice(deletedCells, 1);
                this.props.setPrisoners(prisoners);

            })
            .then(res => console.log(res))
    }
    render() {
        return (<button onClick={() => { this.handleDelate() }}>Usuń</button>);
    }
}

export default DeletePrisoner;