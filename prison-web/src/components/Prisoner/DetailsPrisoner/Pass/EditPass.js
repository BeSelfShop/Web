import React, { Component } from 'react';
import PutPass from "../../../../fetchData/Pass/PutPass";

class EditPass extends Component {
    state = {
        pass: {
            idPrisoner: this.props.id,
            startDate: new Date(),
            endDate: new Date(),
        },
    }
    componentDidMount = () => {
        this.setState({
            pass: this.props.pass
        })
    }
    handleButton = () => {
        let passProp = { state: this.state.pass, id: this.state.pass.idPrisoner }
        PutPass(passProp)
    };
    handleChange = (e) => {
        this.setState({
            pass: {
                ...this.state.pass,
                [e.target.name]: e.target.value,
            }
        })

    }
    render() {
        let endData = new Date(this.props.pass.endDate).toLocaleDateString();
        return (<div className='popup'>
            <div className='popup_inner'>
                <div>
                    <div><label id="endDate" htmlFor="endDate">Data zakończenia przepustki (obecna {endData}): </label>
                        <input name="endDate" onChange={this.handleChange} type="date" /></div>
                </div>

                <button className="registerButton" onClick={this.handleButton}>
                    Edytuj przepustkę
                </button>
                <button onClick={this.props.closePopup}>Zamknij</button>
            </div>
        </div>);
    }
}

export default EditPass;