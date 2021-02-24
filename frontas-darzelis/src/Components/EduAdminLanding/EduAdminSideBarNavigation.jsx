import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/ParentLanding.css';

const EduAdminSideBarNavigation = () => {
    return (
            <nav className="sidebar pt-3 mt-3">
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
                            to="/admin/edu/vaikai"
                            className="nav-link active"
                            id="parentForm"
                        >
                            <i className="fas fa-file-contract"></i>
                            Vaikų sąrašas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/edu/registracijos"
                            className="nav-link active"
                            id="childForm"
                        >
                            <i className="fas fa-file-contract"></i>
                            Registracijų sąrašas
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            to="/admin/edu/priemimai/:id/eiles"
                            className="nav-link active"
                            id="childForm"
                        >
                            <i className="fas fa-file-contract"></i>
                            Darželių eilės
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link
                            to="/admin/edu/darzeliai"
                            className="nav-link active"
                            id="mainRegForm"
                        >
                            <i className="fas fa-file-contract"></i>
                            Darželių sąrašas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/edu/darzelioregistracija"
                            className="nav-link active"
                            id="mainRegForm"
                        >
                            <i className="fas fa-file-contract"></i>
                            Pridėti darželį
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