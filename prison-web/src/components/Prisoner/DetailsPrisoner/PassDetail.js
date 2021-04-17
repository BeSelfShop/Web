import React, { Component } from 'react';
import GetPass from "../../../fetchData/Pass/GetPass";

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
    handlePass = () => {
        let startDate = new Date(this.state.pass.startDate).toLocaleDateString();
        let endDate = new Date(this.state.pass.endDate).toLocaleDateString();

        return (<div><h1>Przepustka</h1>
            <h3>Data rozpoczęcia: {startDate}</h3>
            <h3>Data zakończenia: {endDate}</h3>
            <button>Edytuj</button>
            <button>Skasuj</button></div>)
    }

    render() {
        console.log(this.props)
        const { startDate, endDate } = this.state.pass
        return (
            <div>{this.state.isFetching ? this.handlePass() : <button>Dodaj przepustkę</button>}
            </div>
        );
    }
}

export default PassDetail;