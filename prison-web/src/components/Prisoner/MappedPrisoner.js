import DeletePrisoner from "../../fetchData/Prisoners/DeletePrisoner";
import React, { Component } from 'react';
class MappedPrisoner extends Component {

    render() {
        return (<div>
            <table>
                <tbody>
                    <tr className="headerTable">
                        <td>Imie:</td>
                        <td>Nazwisko:</td>
                        <td>Pesel:</td>
                        <td>Adres:</td>
                        <td>Zachowanie:</td>
                        <td>Przepustka:</td>
                        <td>Odizolowany:</td>
                        <td>Akcje:</td>
                    </tr>
                    {this.props.prisoners.map((prisoner) => (
                        <tr key={prisoner.id}>
                            <td>{prisoner.name}</td>
                            <td>{prisoner.forname}</td>
                            <td>{prisoner.pesel}</td>
                            <td>{prisoner.address}</td>
                            <td>{prisoner.behavior}</td>
                            <td>{prisoner.pass ? "Tak" : "Nie"}</td>
                            <td>{prisoner.isolated ? "Tak" : "Nie"}</td>
                            <td>< DeletePrisoner prisoners={this.props.prisoners} setPrisoners={this.props.setPrisoners} id={prisoner.id} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >);
    }
}

export default MappedPrisoner;