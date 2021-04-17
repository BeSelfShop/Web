import React, { Component } from 'react';
import GetAllPrisoners from "../../fetchData/Prisoners/GetAllPrisoners";
import MappedPrisoner from "./MappedPrisoner";
import { Link } from "react-router-dom";
import "./Prisoner.css"

class PrisonerList extends Component {
    state = {
        prisoners: [],
    }
    setPrisoners = (prisoners) => {
        this.setState({
            prisoners
        })
    }
    componentDidMount = () => {
        GetAllPrisoners(this.setPrisoners)
    }
    render() {
        return (<div className="cellBox">
            <h1>Lista więźniów:</h1>
            <MappedPrisoner prisoners={this.state.prisoners} setPrisoners={this.setPrisoners} />
            <div>
                <Link to="/addPrisoner">
                    <button className="add">Dodaj</button>
                </Link>
            </div>
        </div>);
    }
}

export default PrisonerList;