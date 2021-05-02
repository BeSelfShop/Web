import React, { Component } from 'react';
import config from "../../../../config.json"

class CellEdit extends Component {
    state = {
        punishment: {
            idPrisoner: this.props.id,
            idReason: 1,
            lifery: false,
            startDate: "",
            endDate: new Date(),
        },
    }
    componentDidMount = () => {
        this.setState({
            punishment: this.props.punishment
        })
    }
    handleButton = () => {
        console.log(this.state.punishment)
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
    render() {
        let startDate = new Date(this.props.punishment.startDate).toLocaleDateString();
        let endData = new Date(this.props.punishment.endDate).toLocaleDateString();
        var date = endData.toString();
        return (<div className='popup'>
            <div className='popup_inner'>
                <div>
                    <input id="lifery" name="lifery" onChange={this.handleChange} defaultChecked={this.props.punishment.lifery} type="checkbox" />
                    {!this.state.punishment.lifery ? (<div><label id="endDate" for="endDate">Data zakończenia kary (obecna {startDate}): </label>
                        <input name="endDate" onChange={this.handleChange} type="date" /></div>) : null}

                </div>
                <button className="registerButton" onClick={this.handleButton}>
                    Edytuj karę
                </button>
                <button onClick={this.props.closePopup}>Zamknij</button>
            </div>
        </div>);
    }
}

export default CellEdit;