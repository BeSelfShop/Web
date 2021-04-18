import DeletePrisoner from "../../fetchData/Prisoners/DeletePrisoner";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MappedPrisoner extends Component {

    render() {
        const { prisoners, setPrisoners } = this.props
        return (<div className="prisonerBox">
            <table>
                <tbody>
                    <tr className="headerTable">
                        <td>Imie:</td>
                        <td>Nazwisko:</td>
                        <td>Pesel:</td>
                        <td>Akcje:</td>
                    </tr>
                    {prisoners.map((prisoner) => (
                        <tr key={prisoner.id}>
                            <td>{prisoner.name}</td>
                            <td>{prisoner.forname}</td>
                            <td>{prisoner.pesel}</td>
                            <td>
                                < DeletePrisoner
                                    prisoners={prisoners}
                                    setPrisoners={setPrisoners}
                                    id={prisoner.id}
                                />
                                <Link className="details-Button" to={{
                                    pathname: '/prisonerInfo/' + prisoner.id,
                                    state: { id: prisoner.id }
                                }} key={prisoner.id}>Szczegóły</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >);
    }
}

export default MappedPrisoner;