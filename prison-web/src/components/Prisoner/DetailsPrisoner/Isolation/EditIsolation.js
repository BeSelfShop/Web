import React, { Component } from 'react';
import PutIsolation from "../../../../fetchData/Isolation/PutIsolation";

class EditIsolation extends Component {
    state = {
        isolation: {
            idPrisoner: this.props.id,
            startDate: new Date(),
            endDate: new Date(),
        },
    }
    componentDidMount = () => {
        this.setState({
            isolation: this.props.isolation
        })
    }

    handleButton = () => {
        let isolationProp = { state: this.state.isolation, id: this.state.isolation.idPrisoner }
        PutIsolation(isolationProp)
    };
    handleChange = (e) => {
        this.setState({
            isolation: {
                ...this.state.isolation,
                [e.target.name]: e.target.value,
            }
        })

    }
    render() {
        let endData = new Date(this.props.isolation.endDate).toLocaleDateString();
        return (<div className='popup'>
            <div className='popup_inner'>
                <div>
                    <div><label id="endDate" htmlFor="endDate">Data zakończenia izolacji (obecna {endData}): </label>
                        <input name="endDate" onChange={this.handleChange} type="date" /></div>
                </div>

                <button className="registerButton" onClick={this.handleButton}>
                    Edytuj izolacje
                </button>
                <button onClick={this.props.closePopup}>Zamknij</button>
            </div>
        </div>);
    }
}

export default EditIsolation;