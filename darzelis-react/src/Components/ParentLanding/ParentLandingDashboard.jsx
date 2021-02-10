import React from 'react';
import "./ParentLanding.css"

const ParentLandingDashboard = () => {
    return (
        <div className="mt-5 ml-3">
            <div className="mb-3">
                <h5>Vaiko registracijos į darželius statusas</h5>
            </div>
            <div className="row">
                <div className="col-lg-1 col-md-2 col-sm-6 card shadow-sm bg-white border-0 rounded">
                    <p>Tėvo (globėjo) anketa</p>
                    <a href="#" className="btn">Pildyti</a>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6 arrow">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6 card shadow-sm bg-white border-0 rounded">
                    <p>Vaiko duomenų anketa</p>
                    <a href="#" className="btn">Pildyti</a>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6 arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6 card shadow-sm bg-white border-0 rounded">
                    <p>Prašymas regitruoti į darželį</p>
                    <a href="#" className="btn">Pildyti</a>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6 arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6 card shadow-sm bg-white border-0 rounded">
                    <p>Prašymas priimtas</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6 arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6 card shadow-sm bg-white border-0 rounded">
                    <p>Vaiko vieta eilėje</p>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6  arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-6 card shadow-sm bg-white border-0 rounded">
                    <p>Sutartis su darželiu pasirašyta</p>
                </div>
            </div>
        </div>
    )
};
export default ParentLandingDashboard