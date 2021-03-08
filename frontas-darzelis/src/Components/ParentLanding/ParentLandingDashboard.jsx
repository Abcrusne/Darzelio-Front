import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import {withRouter} from "react-router";

import {API} from "../../Configuration/AppConfig";
// import "../../Style/UsersLandings.css"
import "../../Style/ParentLandingDashboard.css"

class ParentLandingDashboard extends Component {
    state = {
        parentDetailsFilled: false,
        childRegistered: false,
        passwordChanged: true,
        children: []
    }

    componentDidMount = () => {
        console.log("component did mount")
        axios
            .get(`${API}/api/users/status`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    parentDetailsFilled: response.data.detailsFilled,
                    childRegistered: response.data.childRegistered,
                    children: response.data.children,
                    passwordChanged: response.data.passwordChanged,
                })
                console.log(this.state.children)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const {
            passwordChanged,
            parentDetailsFilled,
            childRegistered,
            children
        } = this.state
        return (
            <div className="mt-5 ml-3">
                {passwordChanged ? (''
                    ) :
                    (
                        <div className="alert alert-warning alert-dismissible fade show shadow rounded mb-5"
                             role="alert">
                            <strong>Dėmesio!</strong> Jūsų slaptažodis nesaugus, rekomenduojame
                            <a href="/tevai/duomenys/redaguoti/slaptazodi" className="alert-link"> pasikeisti. </a>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                            </button>
                        </div>
                    )}
                <div>
                    <div className="row mb-3">
                        <h5>Vaiko registracijos į darželius statusas</h5>
                    </div>

                    <div className="row">
                        {/*Parent card + arrow*/}
                        <div className="col-2">
                            <div className="row mb-3">
                                <div
                                    className="col-sm-9 card shadow-sm bg-white border-0 rounded m-auto">
                                    <p>Tėvo (globėjo) anketa</p>
                                    {!parentDetailsFilled ?
                                        (<Link to="/tevai/registracija" className="btn">Pildyti</Link>) :
                                        (<Link to="/tevai/registracija/redaguoti" className="btn">Redaguoti</Link>)}
                                </div>
                                <div className="col-sm-3 d-flex align-items-center arrow  m-auto">
                                    <i className="fas fa-chevron-right "></i>
                                </div>
                            </div>
                        </div>
                        {/*Child cards + arrows*/}
                        {childRegistered ? (
                                children.map(child =>
                                    // <div className="col-10">
                                        <div className="row equal mb-3">

                                            <div className="col-12">
                                                <h5>Vaikas:
                                                    {' ' + child.firstname + ' ' + child.lastname + ' '} </h5>
                                            </div>
                                            <div
                                                className="col-sm-2 d-flex pb-3 card
                                        shadow-sm bg-white border-0 rounded m-auto">
                                                <p>Vaiko
                                                    {/*<em>{' ' + child.firstname + ' ' + child.lastname + ' '} </em>*/}
                                                    duomenų anketa</p>
                                                <button className="btn" >
                                                    <a href={`/tevai/vaikai/${child.childId}`}>Redaguoti</a>
                                                </button>
                                            </div>
                                            <div className="col-sm-2 d-flex pb-3 arrow  m-auto">
                                                <i className="fas fa-chevron-right"></i>
                                            </div>
                                            <div
                                                className="col-sm-2 d-flex pb-3 card
                                        shadow-sm bg-white border-0 rounded m-auto">
                                                <p>Prašymas registruoti į darželį</p>
                                                {child.applicationFilled ?
                                                    (<button className="btn">
                                                        <a href={`/tevai/vaikai/registracijos/${child.childId}`}>Redaguoti</a>
                                                    </button>) :
                                                    (<button className="btn" disabled={!childRegistered}>
                                                        <a href="/tevai/registracija-i-darzeli" disabled={!childRegistered}>Pildyti</a>
                                                    </button>)}
                                            </div>
                                            <div className="col-sm-2 d-flex pb-3 arrow  m-auto">
                                                <i className="fas fa-chevron-right"></i>
                                            </div>
                                            <div
                                                className="col-sm-2 d-flex pb-3 card
                                            shadow-sm bg-white border-0 rounded m-auto">
                                                <p>Prašymo statusas:
                                                    <strong>{child.applicationAccepted ? " priimtas" : "nepriimtas"}</strong>
                                                </p>
                                            </div>
                                            <div className="col-sm-2 d-flex pb-3 arrow m-auto">
                                                <i className="fas fa-chevron-right"></i>
                                            </div>
                                            <div
                                                className="col-sm-2 d-flex pb-3 card
													shadow-sm bg-white border-0 rounded m-auto">
                                                {!child.applicationAccepted ?
                                                    (<p>(child.notAcceptedReason)</p>): (child.acceptedKindergarten !== null? (<p>
                                                        {/*{child.firstname} {child.lastname} */}
                                                        pateko
                                                        į <strong>{child.acceptedKindergarten}</strong> darželį</p>):
                                                    (<div>
                                                        <p>Vaiko vieta eilėje darželiuose pagal prioritetus:</p>
                                                        <ol type="1">
                                                            <li>{child.firstPriority}: {child.placeInFirstPriority} vieta</li>
                                                            <li>{child.secondPriority}: {child.placeInSecondPriority} vieta</li>
                                                            <li>{child.thirdPriority}: {child.placeInThirdPriority} vieta</li>
                                                            <li>{child.fourthPriority}: {child.placeInFourthPriority} vieta</li>
                                                            <li>{child.fifthPriority}: {child.placeInFifthPriority} vieta</li>
                                                        </ol>
                                                    </div>))
                                                }
                                            </div>
                                        </div>

                            )) :
                            (<div className="row equal mb-3">
                                <div
                                    className="col-sm-2 d-flex pb-3 card shadow-sm bg-white border-0 rounded m-auto">
                                    <p>Vaiko duomenų anketa</p>
                                    <Link to="/tevai/vaikoregistracija" className="btn" disabled={!parentDetailsFilled}>Pildyti</Link>
                                </div>
                                <div
                                    className="col-sm-2 d-flex pb-3 d-flex align-items-center arrow  m-auto">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                                <div
                                    className="col-sm-2 d-flex pb-3 card shadow-sm bg-white border-0 rounded m-auto">
                                    <p>Prašymas registruoti į darželį</p>
                                    <button className="btn" disabled={!childRegistered}>
                                        <a href="tevai/registracija-i-darzeli">Pildyti</a>
                                    </button>
                                </div>
                                <div
                                    className="col-sm-2 d-flex pb-3 align-items-center arrow  m-auto">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                                <div
                                    className="col-sm-2 d-flex pb-3 card shadow-sm bg-white border-0 rounded m-auto">
                                    <p>Prašymas priimtas</p>
                                </div>
                                <div
                                    className="col-sm-2 d-flex pb-3 align-items-center arrow m-auto">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                                <div
                                    className="col-sm-2 d-flex pb-3 card shadow-sm bg-white border-0 rounded m-auto">
                                    <p>Vaiko vieta eilėje</p>
                                </div>
                            </div>)}
                        <div className="col-12 mt-2 ml-2 card shadow-sm bg-white border-0 rounded">
                            <button className="btn" disabled={!parentDetailsFilled}>
                                <a href="tevai/vaikoregistracija">Pridėti dar vieną vaiką</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ParentLandingDashboard)