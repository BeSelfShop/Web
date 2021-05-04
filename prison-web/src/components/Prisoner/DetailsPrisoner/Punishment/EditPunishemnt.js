import React, { Component } from 'react';
import GetReason from "../../../../fetchData/Reason/GetAllReasons";
import PutPunishment from "../../../../fetchData/Punishment/PutPunishment";

class EditPunishment extends Component {
    state = {
        punishment: {
            idPrisoner: this.props.id,
            idReason: 1,
            lifery: false,
            startDate: "",
            endDate: new Date(),
            reason: [],
            isFetchingReason: false
        },
    }
    componentDidMount = () => {
        this.setState({
            punishment: this.props.punishment
        })
        this.loadReason()
    }
    loadReason = () => {
        GetReason(this.setReason)
    }
    setReason = (reason) => {
        this.setState({
            reason,
            isFetchingReason: true,
        })
    }
    handleButton = () => {
        let punishmentProp = { state: this.state.punishment, id: this.state.punishment.idPrisoner }
        PutPunishment(punishmentProp)
    };
    handleChange = (e) => {
        if (e.target.name === "lifery") {
            this.setState({
                punishment: {
                    ...this.state.punishment,
                    lifery: !this.state.punishment.lifery,
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
    };
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
                    <option value="" defaultValue hidden>{this.props.reason}</option>
                    {this.state.reason.map((reason) => (
                        <option key={reason.id} value={reason.id}>
                            {reason.reasonName}
                        </option>

                    ))}
                </select>
            </div>
        );
    }
    render() {
        let endData = new Date(this.props.punishment.endDate).toLocaleDateString();
        return (<div className='popup'>
            <div className='popup_inner'>
                <div>
                    <label id="lifery" htmlFor="lifery">Dożywocie: </label>
                    <input id="lifery" name="lifery" onChange={this.handleChange} defaultChecked={this.props.punishment.lifery} type="checkbox" />
                    {!this.state.punishment.lifery ? (<div><label id="endDate" htmlFor="endDate">Data zakończenia kary (obecna {endData}): </label>
                        <input name="endDate" onChange={this.handleChange} type="date" /></div>) : null}
                </div>
                {this.state.isFetchingReason ? this.mapReason() : null}

                <button className="registerButton" onClick={this.handleButton}>
                    Edytuj karę
                </button>
                <button onClick={this.props.closePopup}>Zamknij</button>
            </div>
        </div>);
    }
}

export default EditPunishment;