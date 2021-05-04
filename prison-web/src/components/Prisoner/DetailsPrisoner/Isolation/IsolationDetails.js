import React, { Component } from 'react';
import GetIsolation from "../../../../fetchData/Isolation/GetIsolation";
import DeleteIsolation from "../../../../fetchData/Isolation/DeleteIsolation";
import AddIsolation from "./AddIsolation"
import EditIsolation from './EditIsolation';

class IsolationDetails extends Component {
    state = {
        isolation: [],
        isFetching: false,
    }
    componentDidMount = () => {
        this.initiateIsolation()
    }
    initiateIsolation = () => {
        let isolationHandle = { setIsolation: this.setIsolation, id: this.props.id }
        GetIsolation(isolationHandle);
    }
    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup,
        });
        this.initiateIsolation()
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
                    <button onClick={() => { this.togglePopup() }}>Edytuj</button>
                    {this.state.showPopup
                        ? <EditIsolation
                            isolation={this.state.isolation}
                            closePopup={this.togglePopup}
                        />
                        : null
                    }
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