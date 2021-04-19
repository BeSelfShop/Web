import React, { Component } from 'react';
import GetPass from "../../../fetchData/Pass/GetPass";
import DeletePass from "../../../fetchData/Pass/DeletePass";
import AddPass from "./Pass/AddPass"

class PassDetail extends Component {
    state = {
        pass: [],
        isFetching: false,
    }
    componentDidMount = () => {
        let passHandle = { setPass: this.setPass, id: this.props.id }
        GetPass(passHandle);

    }
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }
    setPass = (pass) => {
        this.setState({
            pass,
            isFetching: true,
        })

    }
    deletePass = () => {
        this.setState({
            pass: [],
            isFetching: false,
        })

    }

    handlePass = () => {
        let startDate = new Date(this.state.pass.startDate).toLocaleDateString();
        let endDate = new Date(this.state.pass.endDate).toLocaleDateString();
        let handlePassDelete = {
            deletePass: this.deletePass,
            id: this.props.id
        }
        return (
            <div>
                <h1>Przepustka</h1>
                <h3>Data rozpoczęcia: {startDate}</h3>
                <h3>Data zakończenia: {endDate}</h3>
                <div className="button-section">
                    <button>Edytuj</button>
                    <button className="delete" onClick={() => {
                        DeletePass(handlePassDelete)

                    }}>Usuń</button>

                </div>
            </div>)

    }

    render() {
        return (
            <div>{this.state.isFetching ? this.handlePass() : <AddPass id={this.props.id} setPass={this.setPass} />}
            </div>
        );
    }
}

export default PassDetail;