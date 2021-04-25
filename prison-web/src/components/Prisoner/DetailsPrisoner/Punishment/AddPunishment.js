import React, { Component } from 'react';
import PostPunishment from "../../../../fetchData/Punishment/PostPunishment";
import GetAllReasons from "../../../../fetchData/Reason/GetAllReasons";

class AddPunishment extends Component {
    state = {
        punishment: {
            idPrisoner: this.props.id,
            idReason: 1,
            lifery: false,
            startDate: "",
            endDate: new Date(),
        },
        reasons: [],
        reason: []

    }
    componentDidMount = () => {
        GetAllReasons(this.setReason);
    }
    setReason = (reasons) => {
        this.setState({
            reasons
        })
    }
    handleReason = (e) => {

        this.setState({
            punishment: {
                ...this.state.punishment,
                idReason: e.target.value * 1,
            },
        })
    }

    mapReason = () => {
        return (
            <div>
                <h3>Powód:</h3>
                <select onChange={this.handleReason}>
                    <option value="" defaultValue hidden>Wybierz powód</option>
                    {this.state.reasons.map((reason) => (
                        <option key={reason.id} value={reason.id}>
                            {reason.reasonName}
                        </option>

                    ))}
                </select>
            </div>
        );
    }
    handleChange = (e) => {
        console.log(e.target.name)
        if (e.target.name === "lifery") {
            this.setState({
                punishment: {
                    ...this.state.punishment,
                    [e.target.name]: !this.state.punishment.lifery,
                }
            })
        }
        else {
            this.setState({
                punishment: {
                    ...this.state.punishment,
                    [e.target.name]: e.target.value,
                }
            })
        }
    }
    handleButton = () => {
        PostPunishment(this.state.punishment)
        this.props.setPunishment(this.state.punishment)
    }
    render() {
        return (<div>
            <div><label id="startDate" for="startDate">Data rozpoczęcia kary:</label>
                <input name="startDate" onChange={this.handleChange} type="date" /></div>
            <label for="lifery">Dożywocie:</label>
            <input id="lifery" name="lifery" onChange={this.handleChange} type="checkbox" />
            {!this.state.punishment.lifery
                ? (<div>
                    <div><label id="endDate" for="endDate">Data zakończenia kary:</label>
                        <input name="endDate" onChange={this.handleChange} type="date" /></div>
                </div>)
                : null}
            {this.mapReason()}
            <button onClick={() => this.handleButton()} className="add">Dodaj karę</button>
        </div>);
    }
}

export default AddPunishment;