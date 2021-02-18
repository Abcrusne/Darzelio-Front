import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/ParentLanding.css';

const EduAdminSideBarNavigation = () => {
    return (
        <nav className="pt-3 mt-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link
                        to="/admin/edu/naudotojo-duomenys"
                        className="nav-link active"
                        id="userData"
                    >
                        <i className="fas fa-user"></i>
                        Naudotojo duomenys
                    </Link>
                    <hr />
                </li>
                <li className="nav-item">
                    <Link
                        to="/tevai/registracija/redaguoti"
                        className="nav-link active"
                        id="parentForm"
                    >
                        <i className="fas fa-file-contract"></i>
                        Redaguoti tėvo (globėjo) anketą
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/tevai/vaikoregistracija"
                        className="nav-link active"
                        id="childForm"
                    >
                        <i className="fas fa-file-contract"></i>
                        Vaiko duomenų anketa
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/tevai/registracija-i-darzeli"
                        className="nav-link active"
                        id="mainRegForm"
                    >
                        <i className="fas fa-file-contract"></i>
                        Prašymas registruoti į darželį
                    </Link>
                    <hr />
                </li>
                <li className="nav-item">
                    <Link to="/admin/edu/statistika" className="nav-link active">
                        <i className="fas fa-info"></i>
                        Statistika
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default EduAdminSideBarNavigation;
