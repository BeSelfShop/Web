import React, { Component } from 'react';
import GetPrisoner from "../../../../fetchData/Prisoner/GetPrisoner";
import EditPrisoner from "./EditPrisoner";

class PrisonerDetails extends Component {

    state = {
        prisoner: [],
        isFetching: false,
    }
    componentDidMount = () => {
        this.initiatePrisoner()
    }
    initiatePrisoner = () => {
        let prisonerHandle = { setPrisoner: this.setPrisoner, id: this.props.id }
        GetPrisoner(prisonerHandle);
    }
    setPrisoner = (prisoner) => {
        this.setState({
            prisoner,
            isFetching: true
        })
    }
    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup,
        });
        this.initiatePrisoner()
    }
    render() {
        const { name, forname, pesel, address, behavior } = this.state.prisoner
        return (<div>{this.state.isFetching ? (<div><h3>{name} {forname}</h3>
            <h3>Pesel: {pesel}</h3>
            <h3>Adres: {address}</h3>
            <h3>Zachowanie: {behavior}</h3>
            <button onClick={() => { this.togglePopup() }}>Edytuj</button>
            {this.state.showPopup
                ? <EditPrisoner
                    prisoner={this.state.prisoner}
                    closePopup={this.togglePopup}
                />
                : null
            }</div>) : "brak"}

        </div>);
    }
}

export default PrisonerDetails;