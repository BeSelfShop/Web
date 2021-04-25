import React, { Component } from 'react';
import PostIsolation from "../../../../fetchData/Isolation/PostIsolation";

class AddIsolation extends Component {
    state = {
        isolation: {
            idPrisoner: this.props.id,
            startDate: new Date(),
            endDate: new Date(),
        },

    }

    handleChange = (e) => {
        this.setState({
            isolation: {
                ...this.state.isolation,
                [e.target.name]: e.target.value,
            }
        })

    }
    handleButton = () => {
        PostIsolation(this.state.isolation)
        this.props.setIsolation(this.state.isolation)
    }
    render() {
        return (<div>
            <div><label id="startDate" for="startDate">Data rozpoczęcia izolacji:</label>
                <input name="startDate" onChange={this.handleChange} type="date" /></div>

            <div><label id="endDate" for="endDate">Data zakończenia izolacji:</label>
                <input name="endDate" onChange={this.handleChange} type="date" /></div>

            <button onClick={() => this.handleButton()} className="add">Dodaj do izolacji</button>
        </div>);
    }
}

export default AddIsolation;