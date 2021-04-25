import React, { Component } from 'react';
import GetIsolation from "../../../fetchData/Isolation/GetIsolation";
import DeleteIsolation from "../../../fetchData/Isolation/DeleteIsolation";
import AddIsolation from "./Isolation/AddIsolation"

class IsolationDetails extends Component {
    state = {
        isolation: [],
        isFetching: false,
    }
    componentDidMount = () => {
        let isolationHandle = { setIsolation: this.setIsolation, id: this.props.id }
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
    deleteIsolation = () => {
        this.setState({
            isolation: [],
            isFetching: false,
        })

    }
    handleIsolation = () => {
        let startDate = new Date(this.state.isolation.startDate).toLocaleDateString();
        let endDate = new Date(this.state.isolation.endDate).toLocaleDateString();
        let handleDeleteIsolation = {
            id: this.props.id,
            deleteIsolation: this.deleteIsolation
        }
        return (
            <div>
                <h1>Izolatka:</h1>
                <h3>Data rozpoczęcia: {startDate}</h3>
                <h3>Data zakończenia: {endDate}</h3>
                <div className="button-section">
                    <button>Edytuj</button>
                    <button className="delete" onClick={() => { DeleteIsolation(handleDeleteIsolation) }}>Skasuj</button>
                </div>
            </div>)

    }

    render() {
        return (
            <div>{this.state.isFetching ? this.handleIsolation() : <AddIsolation id={this.props.id} setIsolation={this.setIsolation} />}
            </div>
        );
    }
}

export default IsolationDetails;