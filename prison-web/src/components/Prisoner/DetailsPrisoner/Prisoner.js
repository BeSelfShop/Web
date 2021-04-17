import React, { Component } from 'react';
import GetPrisoner from "../../../fetchData/Prisoners/GetPrisoner";
import GetIsolation from "../../../fetchData/Isolation/GetIsolation";
import PrisonerDetails from "./PrisonerDetails"
import PunishmentDetails from "./PunishmentDetails"
import PassDetails from "./PassDetail"


class Prisoner extends Component {
    state = {
        prisoner: [],

        punishment: [],
        isolation: []
    }
    componentDidMount = () => {
        this.test();
    }
    test = () => {
        let prisonerHandle = { setPrisoner: this.setPrisoner, id: this.props.id }
        let isolationHandle = { setIsolation: this.setIsolation, id: this.props.id }
        GetPrisoner(prisonerHandle);
        GetIsolation(isolationHandle);
    }
    setPrisoner = (prisoner) => {
        this.setState({
            prisoner,
        })
    }
    setPunishment = (punishment) => {
        this.setState({
            punishment,
        })
    }
    setIsolation = (isolation) => {
        this.setState({
            isolation
        })
    }
    getPass = () => {
        return (<PassDetails pass={this.state.pass} />)
    }
    render() {

        return (<div><h1>Informacje o więźniu</h1>

            <div><PrisonerDetails prisoner={this.state.prisoner} /></div>
            <div><PassDetails id={this.props.id} /></div>
            <div><PunishmentDetails id={this.props.id} /></div>
        </div >);
    }
}

export default Prisoner;