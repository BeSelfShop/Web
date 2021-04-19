import React, { Component } from 'react';
import GetPunishment from "../../../fetchData/Punishment/GetPunishment";
import GetReason from "../../../fetchData/Reason/GetReason";
import AddPunishment from "./Punishment/AddPunishment"

class PunishmentDetails extends Component {
    state = {
        isFetchingReason: false,
        isFetchingPunishment: false,
        punishment: [],
        reason: []
    }
    componentDidMount = () => {
        this.test();
        setTimeout(() => { this.test() }, 1000);
    }

    test = () => {
        let punishmentHandle = { setPunishment: this.setPunishment, id: this.props.id }
        GetPunishment(punishmentHandle);
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
            <h3>Data zakończenia: {this.state.punishment.lifery ? "Dożywocie" : endData}</h3>
            <h3>Powód: {this.state.reason.reasonName}</h3>
            <button>Edytuj</button>
        </div>)
    }
    render() {

        return (
            <div>
                {this.state.isFetchingPunishment ? this.handlePunishment() : <AddPunishment id={this.props.id} setPunishment={this.setPunishment} setReason={this.setReason}/>}
            </div>);
    }
}

export default PunishmentDetails;