import React, {useState} from "react";
import {Link} from "react-router-dom";

import {API} from "../../Configuration/AppConfig";
import {ModalForChildQueueDeleteButton} from "../Modal/ModalForChildQueueDeleteButton";

const ChildrenRegistrationQueuePresentation = ({ChildrenAdmissionQueue, deleteChild, onSubmit}) => {
   let sortedList = [...ChildrenAdmissionQueue];
    const [sortedField, setSortedField] = useState(null);
   if (sortedField !== null) {
        sortedList.sort((a, b) => {
            if (a[sortedField] < b[sortedField]) {
                return -1;
            }
            if (a[sortedField] > b[sortedField]) {
                return 1;
            }
            return 0;
        });
    }

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('firstName')}>
                        Vardas
                    </button>
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('lastName')}>
                        Pavardė
                    </button>
                </th>
                {/*<th scope="col">Pavardė</th>*/}
                <th scope="col">Asmens kodas</th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('rating')}>
                        Reitingas
                    </button>
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('status')}>
                        Statusas(priimtas/ laukiantis)
                    </button>
                </th>
                <th scope="col">
                    <button type="button" onClick={() => setSortedField('status')}>
                        Darželio pavadinimas (jei vaikas priimtas)
                    </button>
                </th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {sortedField !== 0 ? (
                sortedField.map(
                    ({childId, firstName, lastName, rating, accepted, personalCode, kindergardenName},
                     index) => {
                        return (
                            <tr key={childId}>
                                <th scope="row">{index + 1}</th>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{personalCode}</td>
                                <td>{rating}</td>
                                {accepted ? <td>Priimtas</td> : <td>Nepriimtas</td>}
                                {accepted ? <td>{kindergardenName}</td> : <td>null</td>}
                                <td>
                                    <Link
                                        className="btn btn-link-1"
                                        to={'/admin/edu/priemimai/${childId}'}
                                    >
                                        Į vaiko anketą
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        className="mr-4 btn btn-danger"
                                        data-toggle="modal"
                                        data-target={`#staticBackdrop${childId}`}
                                        value={childId}
                                    >Pašalinti iš eilės
                                    </button>
                                </td>
                                <td>
                                    <ModalForChildQueueDeleteButton
                                        childId={childId}
                                        onClick={deleteChild}
                                        firstName={firstName}
                                        lastname={lastName}
                                    />
                                </td>
                            </tr>
                        );
                    })) : <h5>...</h5>}
            </tbody>
            <tfoot>
            <td colSpan="8">
                <button
                    type="button"
                    className="mr-4 btn text-nowrap"
                    onSubmit={onSubmit}
                >Patvirtinti darželio eilę
                </button>
            </td>
            </tfoot>
        </table>

    )
}

export default ChildrenRegistrationQueuePresentation