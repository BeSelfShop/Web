import React, { Component } from 'react';
import GetPrisoner from "../../../fetchData/Prisoners/GetPrisoner";

class PrisonerDetails extends Component {

    state = {
        prisoner: [],
        isFetching: false,
    }
    componentDidMount = () => {
        let prisonerHandle = { setPrisoner: this.setPrisoner, id: this.props.id }
        GetPrisoner(prisonerHandle);
    }
    setPrisoner = (prisoner) => {
        this.setState({
            prisoner,
            isFetching: true
        })
    }
    render() {
        const { name, forname, pesel, address, behavior } = this.state.prisoner
        return (<div>{this.state.isFetching ? (<div><h3>{name} {forname}</h3>
            <h3>Pesel: {pesel}</h3>
            <h3>Adres: {address}</h3>
            <h3>Zachowanie: {behavior}</h3>
            <button>Edytuj</button></div>) : "brak"}

        </div>);
    }
}

export default PrisonerDetails;