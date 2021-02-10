import React from "react";
import {NavLink} from "react-router-dom";
import LogoutPresentation from "./LogoutPresentation";
import UserService from "../../Configuration/UserService";

const NavigationForAllPages = (props) => {
    const pradzia = () => {
        const currentRole = UserService.getRole();
        switch (currentRole) {
            case "[PARENT]":
                return ('/dashboard')
                break;
            case "[EDU]":
                return ('/admin/edu')
                break;
            case "[ADMIN]":
                return ('/admin/pradzia')
                break;
            default:
                break;
        }
    }
    const role = UserService.getRole();

    console.log(role)
    console.log(pradzia())
    return (
        <div>
            <nav className="py-3 pl-3 pr-4 navbar-light">
                <ul className="nav flex-column flex-sm-row">
                    <li className="flex-sm-fill nav-item active">
                        <NavLink to={pradzia} className="nav-link ">
                            Į pradžią
                        </NavLink>
                    </li>
                    <span className="navbar-text pr-3">
                                Esate prisijungęs kaip {role}
                            </span>
                    <LogoutPresentation/>
                </ul>
            </nav>
            {props.children}

        </div>
    );
}
export default NavigationForAllPages