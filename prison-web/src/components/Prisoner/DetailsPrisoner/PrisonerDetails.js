import React, { Component } from 'react';

class PrisonerDetails extends Component {

    render() {
        const { name, forname, pesel, address, behavior } = this.props.prisoner
        return (<div className="cellBox">
            <h3>{name} {forname}</h3>
            <h3>Pesel: {pesel}</h3>
            <h3>Adres: {address}</h3>
            <h3>Zachowanie: {behavior}</h3>
            <button>Edytuj</button>
        </div>);
    }
}

export default PrisonerDetails;