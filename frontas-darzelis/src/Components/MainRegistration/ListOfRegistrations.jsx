import React, {Component} from 'react';
import axios from "axios";

//our imports
import {API} from "../../Configuration/AppConfig";
import ListOfRegistrationsPresentation from "./ListOfRegistrationsPresentation";
import "../../Style/ParentLanding.css"

class ListOfRegistrations extends Component {
    constructor() {
        super();
        this.state = {
            admissionQues: [],
        };
    }
    componentDidMount = () => {
        axios
            .get(`${API}/api/kindergartens/admissions`)
            .then((response) => {
                this.setState({ admissionQues: response.data });
                }
            )
            .catch((error) => console.log(error))

    };

   handleStartClick = () => {
        axios
            .post(`${API}/api/kindergartens/startadmission`)
            .then(response => {
                console.log(response.data);
                alert('Sukurta nauja registracijų į darželius eilė, kurios pradžia ' + response.data)
            })
            .catch(error => alert('Negalima atidaryti naujos registracijų eilės, kol yra aktyvi registracija! Pirma sustabdykite aktyvią eilę, tuomet atidarykite naują.'))
    }



    render (){
        const Ques = this.state.admissionQues;
        return(
            <div>
                <div className="container mt-5">
                    <div className="mb-4">
                        <h4>Registracijų į darželius sąrašas</h4>
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pradžios data</th>
                            <th scope="col">Pabaigos data</th>
                            <th scope="col">Atidarytas (taip/ne)</th>
                            <th scope="col">Viso registracijų</th>
                            <th scope="col">Viso vietų darželiuose</th>
                            <th scope="col">Ar visos eilės patvirtintos</th>
                            <th scope="col">Peržiūrėti sąrašus</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>

                        {this.state.admissionQues.length > 0 ? (
                            <tbody>
                            <ListOfRegistrationsPresentation
                                admissionQues={this.state.admissionQues}
                            />
                            </tbody>
                        ) : <h5>...</h5>}
                        <tfoot>
                            <td colSpan="8">
                                <button
                                    type="button"
                                    className="mr-4 btn text-nowrap"
                                    onClick={this.handleStartClick}
                                >Atidaryti registraciją į darželius
                                </button>
                            </td>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }

}
export default ListOfRegistrations;