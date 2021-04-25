import React, { Component } from 'react';
import PostPass from "../../../../fetchData/Pass/PostPass";

class AddPass extends Component {
    state = {
        pass: {
            idPrisoner: this.props.id,
            startDate: new Date(),
            endDate: new Date(),
        },

    }

    handleChange = (e) => {
        this.setState({
            pass: {
                ...this.state.pass,
                [e.target.name]: e.target.value,
            }
        })

    }
    handleButton = () => {
        PostPass(this.state.pass)
        this.props.setPass(this.state.pass)
    }
    render() {
        return (<div>
            <div><label id="startDate" for="startDate">Data rozpoczęcia przepustki:</label>
                <input name="startDate" onChange={this.handleChange} type="date" /></div>

            <div><label id="endDate" for="endDate">Data zakończenia przepustki:</label>
                <input name="endDate" onChange={this.handleChange} type="date" /></div>

            <button onClick={() => this.handleButton()} className="add">Dodaj przepustkę</button>
        </div>);
    }
}

export default AddPass;