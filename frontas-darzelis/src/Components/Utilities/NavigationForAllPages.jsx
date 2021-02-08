import React from "react";
import {NavLink} from "react-router-dom";
import LogoutPresentation from "./LogoutPresentation";
import UserService from "../../Configuration/UserService";

const NavigationForAllPages = (props) => {
    const pradzia = () => {
        const currentRole = UserService.getRole();
        switch (currentRole) {
            case "[PARENT]":
                return ('"/admin/pradzia"')
                break;
            case "[EDU]":
                return ('"/admin/edu"')
                break;
            case "[ADMIN]":
                return ('"/admin/pradzia"')
                break;
            default:
                break;
        }
    }

    console.log(pradzia())
    return (
        <div>
            <nav className=" container-fluid py-3 navbar-light bg-light">
                    <ul className="nav flex-column flex-sm-row">
                        <li className="flex-sm-fill nav-item active">
                            <NavLink to={pradzia()} className="nav-link ">
                                Į pradžią
                            </NavLink>
                        </li>
                        <li className="flex-sm-fill nav-item">
                            <span className="navbar-text">
                                Username'ui vieta
                                {/*{UserService.getUsername}*/}
                            </span>
                        </li>
                        <li className="flex-sm-fill nav-item">
                            <LogoutPresentation/>
                        </li>
                    </ul>
            </nav>
            {props.children}
        </div>
    );
}
export default NavigationForAllPages