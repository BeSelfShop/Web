import React, { Component } from 'react';
import GetAllPrisoners from "../../fetchData/Prisoner/GetAllPrisoners";
import GetAllReasons from "../../fetchData/Reason/GetAllReasons";
import MappedPrisoner from "./MappedPrisoner";
import { Link } from "react-router-dom";
import "./Prisoner.css"

class PrisonerList extends Component {
    state = {
        prisoners: [],
        filtr: false,
        idReason: 0,
        reasons: []
    }
    setPrisoners = (prisoners) => {
        this.setState({
            prisoners
        })
    }
    setReason = (reasons) => {
        this.setState({
            reasons
        })
    }
    componentDidMount = () => {
        GetAllPrisoners(this.setPrisoners)
        GetAllReasons(this.setReason)
    }
    setFiltr = (e) => {
        if (e.target.value === "0") {
            this.setState({
                filtr: false
            })
        }
        else {
            this.setState({
                idReason: e.target.value * 1,
                filtr: true
            })
        }
    }
    render() {
        return (<div className="prisoner-main">
            <label className="radio-category">
                <input type="radio" value="0" name="gender" onClick={this.setFiltr} /> Wszystkie
            </label>
            {this.state.reasons.map(reason => (
                <label className="radio-category">
                    <input type="radio" value={reason.id} name="gender" onClick={this.setFiltr} /> {reason.reasonName}
                </label>
            ))}
            <h1>Lista więźniów:</h1>
            <MappedPrisoner prisoners={this.state.prisoners} setPrisoners={this.setPrisoners} filtr={this.state.filtr} idReason={this.state.idReason} />
            <div>
                <Link to="/addPrisoner">
                    <button className="add">Dodaj</button>
                </Link>
            </div>
        </div>);
    }
}

export default PrisonerList;