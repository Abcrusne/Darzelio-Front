import React from 'react';
import "../../Style/UsersLandings.css"
import {Link} from "react-router-dom";

const ParentLandingDashboard = () => {
    return (
        <div className="mt-5 ml-3">
            <div className="row mb-3">
                <h5>Vaiko registracijos į darželius statusas</h5>
            </div>
            <div className="row m-auto">
                <div className="col-lg-1 col-md-2 col-sm-12 card shadow-sm bg-white border-0 rounded m-auto">
                    <p>Tėvo (globėjo) anketa</p>
                    <Link to="/tevai/registracija" className="btn">Pildyti</Link>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-12 d-flex align-items-center arrow  m-auto">
                    <i className="fas fa-chevron-right "></i>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-12 card shadow-sm bg-white border-0 rounded m-auto">
                    <p>Vaiko duomenų anketa</p>
                    <Link to="/tevai/vaikoregistracija" className="btn">Pildyti</Link>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-12 d-flex align-items-center arrow  m-auto">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-12 card shadow-sm bg-white border-0 rounded m-auto">
                    <p>Prašymas registruoti į darželį</p>
                    <Link to="/tevai/registracija-i-darzeli" className="btn">Pildyti</Link>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-12 d-flex align-items-center arrow  m-auto">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-12 card shadow-sm bg-white border-0 rounded m-auto">
                    <p>Prašymas priimtas</p>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-12 d-flex align-items-center arrow m-auto">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-12 card shadow-sm bg-white border-0 rounded m-auto">
                    <p>Vaiko vieta eilėje</p>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-12 d-flex align-items-center arrow m-auto">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-12 card shadow-sm bg-white border-0 rounded m-auto">
                    <p>Sutartis su darželiu pasirašyta</p>
                </div>
            </div>
        </div>
    )
};
export default ParentLandingDashboard