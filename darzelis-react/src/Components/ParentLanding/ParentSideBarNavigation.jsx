import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import "./ParentLanding.css"

const ParentSideBarNavigation = () => {

    return (
        <nav className="pt-3 mt-3">
            <ul  className="nav flex-column">
                <li className="nav-item">
                    <Link to="/dashboard/naudotojo-duomenys" className="nav-link active">
                        <i className="fas fa-user"></i>
                        Naudotojo duomenys
                    </Link>
                    <hr />
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/tevai" className="nav-link active">
                        <i className="fas fa-file-contract"></i>
                        Tėvo (globėjo) anketa
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/vaikai" className="nav-link active">
                        <i className="fas fa-file-contract"></i>
                        Vaiko duomenų anketa
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/registracija" className="nav-link active">
                        <i className="fas fa-file-contract"></i>
                        Prašymas regitruoti į darželį
                    </Link>
                    <hr />
                </li>
                {/*<li className="nav-item">*/}
                {/*    <Link to="/dashboard/prasymai" className="nav-link active">*/}
                {/*        <i className="fas fa-envelope"></i>*/}
                {/*        Valdyti prašymus*/}
                {/*    </Link>*/}
                {/*</li>*/}
                <li className="nav-item">
                    <Link to="/dashboard/tvarka" className="nav-link active">
                        <i className="fas fa-info"></i>
                        Vaikų priėmimo tvarka
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/statistika" className="nav-link active">
                        <i className="fas fa-info"></i>
                        Statistika
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard/salygos" className="nav-link active">
                        <i className="fas fa-info"></i>
                        Sąlygos
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default ParentSideBarNavigation
