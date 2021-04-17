import React, { Component } from 'react';
import GetPunishment from "../../../fetchData/Punishment/GetPunishment";

class PunishmentDetails extends Component {
    state = {
        isFetching: false,
        punishment: [],
    }
    componentDidMount = () => {
        let punishmentHandle = { setPunishment: this.setPunishment, id: this.props.id }
        GetPunishment(punishmentHandle);

    }
    setPunishment = (punishment) => {
        this.setState({
            punishment,
            isFetching: true,
        })

    }
    handlePunishment = () => {
        let startDate = new Date(this.state.punishment.startDate).toLocaleDateString();
        let endData = new Date(this.state.punishment.endDate).toLocaleDateString();
        return (<div>
            <h3>Data rozpoczęcia: {startDate}</h3>
            <h3>Data zakończenia: {endData}</h3>
            <h3>Powód: </h3>
            <button>Edytuj</button>
        </div>)
    }
    render() {

        return (
            <div>
                <h1>Kara</h1>
                {this.state.isFetching ? this.handlePunishment() : <button className="add">Dodaj karę</button>}
            </div>);
    }
}

export default PunishmentDetails;