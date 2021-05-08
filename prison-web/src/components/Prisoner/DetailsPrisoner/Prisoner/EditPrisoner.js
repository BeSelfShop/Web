import React, { Component } from 'react';
import PutPrisoner from "../../../../fetchData/Prisoner/PutPrisoner";

class EditPrisoner extends Component {
    state = {
        prisoner: {
            name: "",
            forname: "",
            pesel: "",
            address: "",
            behavior: 1,
        },
    }
    componentDidMount = () => {
        this.setState({
            prisoner: this.props.prisoner
        })
    }
    handleButton = () => {
        let prisonerProp = { state: this.state.prisoner, id: this.state.prisoner.id }
        PutPrisoner(prisonerProp)
    };
    handleChange = (e) => {
        if (e.target.name === "behavior") {
            this.setState({
                prisoner: {
                    ...this.state.prisoner,
                    [e.target.name]: e.target.value * 1,
                }
            });
        } else {
            this.setState({
                prisoner: {
                    ...this.state.prisoner,
                    [e.target.name]: e.target.value,
                }
            });
        }

    }
    render() {
        const { name, forname, pesel, address, behavior } = this.state.prisoner
        console.log(this.props)
        return (<div className='popup'>
            <div className='popup_inner'>
                <div className="edit-label">
                    <label id="name" htmlFor="name">Imię: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Imię"
                        value={name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="edit-label">
                    <label id="forname" htmlFor="forname">Nazwisko: </label>
                    <input
                        type="text"
                        placeholder="Nazwisko"
                        name="forname"
                        value={forname}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="edit-label">
                    <label id="pesel" htmlFor="pesel">Pesel: </label>
                    <input
                        type="text"
                        name="pesel"
                        placeholder="Pesel"
                        value={pesel}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="edit-label">
                    <label id="address" address="endDate">Adres: </label>
                    <input
                        type="text"
                        placeholder="Adres"
                        name="address"
                        value={address}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="edit-label">
                    <h3>Zachowanie:</h3>
                    <select name="behavior" onChange={this.handleChange}>
                        <option value="" defaultValue hidden>{behavior}</option>
                        <option key="1" value="1">
                            1
                    </option>
                        <option key="2" value="2">
                            2
                    </option>
                        <option key="3" value="3">
                            3
                    </option>
                        <option key="4" value="4">
                            4
                    </option>
                        <option key="5" value="5">
                            5
                    </option>
                    </select>
                </div>
                <button className="registerButton" onClick={this.handleButton}>
                    Edytuj więźnia
                </button>
                <button onClick={this.props.closePopup}>Zamknij</button>
            </div>
        </div>);
    }
}

export default EditPrisoner;