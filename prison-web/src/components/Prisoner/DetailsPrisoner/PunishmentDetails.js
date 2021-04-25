import React, { Component } from 'react';
import GetPunishment from "../../../fetchData/Punishment/GetPunishment";
import GetReason from "../../../fetchData/Reason/GetReason";

class PunishmentDetails extends Component {
    state = {
        isFetchingReason: false,
        isFetchingPunishment: false,
        punishment: [],
        reason: []
    }
    componentDidMount = () => {
        let punishmentHandle = { setPunishment: this.setPunishment, id: this.props.id }
        GetPunishment(punishmentHandle);
    }
    componentDidUpdate = () =>{
    }
    test = () => {
        let reasonHandle = { setReason: this.setReason, id: this.state.punishment.idReason }
        GetReason(reasonHandle);
    }
    setPunishment = (punishment) => {
        this.setState({
            punishment,
            isFetchingPunishment: true,
        })
        console.log(this.state.punishment)


    }
    setReason = (reason) => {
        this.setState({
            reason,
            isFetchingReason: true,
        })
        console.log(this.state.reason)


    }
    handlePunishment = () => {
        let startDate = new Date(this.state.punishment.startDate).toLocaleDateString();
        let endData = new Date(this.state.punishment.endDate).toLocaleDateString();
        return (<div>
            <h1>Kara</h1>
            <h3>Data rozpoczęcia: {startDate}</h3>
            <h3>Data zakończenia: {endData}</h3>
            <h3>Powód: {this.state.reason.reasonName}</h3>
            <button>Edytuj</button>
        </div>)
    }
    render() {

        return (
            <div>
                {this.state.isFetchingPunishment ? this.handlePunishment() : <button className="add">Dodaj karę</button>}
            </div>);
    }
}

export default PunishmentDetails;