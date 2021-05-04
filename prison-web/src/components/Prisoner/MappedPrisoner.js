import DeletePrisoner from "../../fetchData/Prisoner/DeletePrisoner";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MappedPrisoner extends Component {

    render() {
        const { prisoners, setPrisoners, filtr, idReason } = this.props
        const prisonersCopy = filtr ? prisoners.filter(prisoner => prisoner.punishments[0]) : prisoners;
        const reason = filtr ? prisonersCopy.filter(prisoner => prisoner.punishments[0].idReason === idReason) : prisoners;
        console.log(prisonersCopy)
        return (<div className="prisonerBox">
            <table>
                <tbody>
                    <tr key="header" className="headerTable">
                        <td>Imie:</td>
                        <td>Nazwisko:</td>
                        <td>Pesel:</td>
                        <td>Akcje:</td>
                    </tr>
                    {reason.map((prisoner) => (

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