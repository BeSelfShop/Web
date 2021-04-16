import React, { Component } from 'react';
import GetPrisoner from "../../fetchData/Prisoners/GetPrisoner";
import GetPass from "../../fetchData/Pass/GetPass";
import GetIsolation from "../../fetchData/Isolation/GetIsolation";
import GetPunishment from "../../fetchData/Punishment/GetPunishment";


class Prisoner extends Component {
    state = {
        prisoner: null,
        pass: null,
        punishment: null,
        isolation: null
    }
    componentDidMount = () => {
        let prisonerHandle = { setPrisoner: this.setPrisoner, id: this.props.id }


        GetPrisoner(prisonerHandle);
        let passHandle = { setPass: this.setPass, id: this.props.id }
        let punishmentHandle = { setPass: this.setPunishment, id: this.props.id }
        let isolationHandle = { setPass: this.setIsolation, id: this.props.id }
        GetPass(passHandle)
        GetPunishment(punishmentHandle)
        GetIsolation(isolationHandle)

    }

    setPrisoner = (prisoner) => {
        this.setState({
            prisoner,
        })
    }
    setPass = (pass) => {
        this.setState({
            pass
        })
    }
    setPunishment = (punishment) => {
        this.setState({
            punishment
        })
    }
    setIsolation = (isolation) => {
        this.setState({
            isolation
        })
    }

    render() {

        return (<div><h1>efef</h1>
            <h1>{this.props.id}</h1>
            <h1>hehe</h1></div >);
    }
}

export default Prisoner;