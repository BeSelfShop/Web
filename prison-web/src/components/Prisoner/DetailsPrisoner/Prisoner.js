import React, { Component } from 'react';
import PrisonerDetails from "./PrisonerDetails"
import PunishmentDetails from "./PunishmentDetails"
import PassDetails from "./PassDetails"
import IsolationDetails from "./IsolationDetails"

import "./../Prisoner.css"


class Prisoner extends Component {


    render() {
        const { id } = this.props
        return (<div className="background"><h1>Informacje o więźniu</h1>
            <div className="section-main">
                <div className="component"><PrisonerDetails id={id} /></div>
                <div className="component"><PunishmentDetails id={id} /></div>
            </div>
            <div className="section-main">
                <div className="component"><PassDetails id={id} /></div>
                <div className="component"><PassDetails id={id} /></div>

            </div>


        </div >);
    }
}

export default Prisoner;