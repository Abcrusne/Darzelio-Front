import React, {Component} from "react";
import axios from "axios";
import {API} from "../../Configuration/AppConfig";

import ListOfRegistrationsPresentation from "../MainRegistration/ListOfRegistrationsPresentation";
import ChildrenRegistrationQueuePresentation from "./ChildrenRegistrationQueuePresentation";

export default class ChildrenRegistrationQueueContainer extends Component {
    constructor() {
        super();
        this.state = {
            ChildrenAdmissionQueue: {},
        };
    }

    componentDidMount = () => {
        axios
            // .get(`${API}/admissions/${this.state.admissionId}/queues/${this.state.queueId}/registrations`)
            .get(`${API} /api/kindergartens/admissions/registrations`)
            .then((response) => {
                this.setState({ChildrenAdmissionQueues: response.data});
            })
            .catch((error) => console.log(error))

    };

    deleteChild = (event) => {
        event.preventDefault();
        axios
            .delete(`${API}`)
            .then(() => {
                axios
                    .get(`${API}/admissions/${this.state.admissionId}/queues/${this.state.queueId}/registrations`)
                    .then((response) => {
                        this.setState({ChildrenAdmissionQueues: response.data});
                    })
            })
            .catch((err) => console.log(err));
        console.log('deleteKindergarten');
    };


    handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(`${API}`)
            .then(response => {
                console.log(response.data);
                alert('Eilė patvirtinta sėkmingai')
            })
            .catch(error => console.log(error))
    }

    render() {
        const ChildrenQueue = this.state.ChildrenAdmissionQueue;
        return (
            <div>
                <div className="m-5">
                    <div className="mb-4">
                        <h4>Vaikų, pateikusių registraciją į darželius, sąrašas</h4>
                    </div>
                    <ChildrenRegistrationQueuePresentation
                        ChildrenAdmissionQueue={ChildrenQueue}
                        deleteChild={this.deleteChild}
                        onSubmit={this.handleSubmit}
                    />
                </div>
            </div>
        )
    }
}