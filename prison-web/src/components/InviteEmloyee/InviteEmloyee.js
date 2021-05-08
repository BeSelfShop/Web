import React, { Component } from 'react';
import RegisterMail from "./../../fetchData/InviteCode/RegisterMail"

class InviteEmployee extends Component {
    state = {
        toEmail: ""
    }
    handleChange = (e) => {
        this.setState({
            toEmail: e.target.value,
        })
    }
    handleButton = () => {
        RegisterMail(this.state)
    }
    render() {
        return (<div>
            <div className="registerBox">
                <h1 className="registerH1">Zaproś pracownika</h1>
                <input
                    className="invite-employee"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.toEmail}
                    onChange={this.handleChange}
                />
                <button className="registerButton" onClick={this.handleButton}>
                    Zaproś
        </button>
            </div>
        </div>);
    }
}

export default InviteEmployee;