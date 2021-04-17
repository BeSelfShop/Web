import React, { Component } from 'react';
import GetIsolation from "../../../fetchData/Isolation/GetIsolation";

class IsolationDetails extends Component {
    state = {
        isolation: [],
        isFetching: false,
    }
    componentDidMount = () => {
        let isolationHandle = { setPass: this.setIsolation, id: this.props.id }
        GetIsolation(isolationHandle);

    }
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }
    setIsolation = (isolation) => {
        this.setState({
            isolation,
            isFetching: true,
        })

    }
    handleIsolation = () => {
        let startDate = new Date(this.state.isolation.startDate).toLocaleDateString();
        let endDate = new Date(this.state.isolation.endDate).toLocaleDateString();

        return (
            <div>
                <h1>Izolatka:</h1>
                <h3>Data rozpoczęcia: {startDate}</h3>
                <h3>Data zakończenia: {endDate}</h3>
                <div className="button-section">
                    <button>Edytuj</button>
                    <button className="delete">Skasuj</button>
                </div>
            </div>)

    }

    render() {
        return (
            <div>{this.state.isFetching ? this.handleIsolation() : <button className="add">Dodaj do izolacji</button>}
            </div>
        );
    }
}

export default IsolationDetails;