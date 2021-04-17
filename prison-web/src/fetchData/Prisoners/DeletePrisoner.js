import config from "../../config.json"
import React, { Component } from 'react';

class DeletePrisoner extends Component {

    handleDelate = () => {
        const { prisoners, setPrisoners, id } = this.props

        var prisoner = [...prisoners]


        fetch(config.SERVER_URL + "api/Prisoner/" + id, {
            method: 'DELETE',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then(res => {
                res.json()
                var deletedCells = prisoner.findIndex(item => item.id === id);
                prisoner.splice(deletedCells, 1);
                setPrisoners(prisoner);

            })
            .then(res => console.log(res))
    }
    render() {
        return (<button className="delete" onClick={() => { this.handleDelate() }}>Usuń</button>);
    }
}

export default DeletePrisoner;