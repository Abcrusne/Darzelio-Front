import React from "react";
import {Link} from "react-router-dom";
import LogoutPresentation from "./LogoutPresentation";
import UserService from "../../Configuration/UserService";

//style
import "../../Style/ParentLanding.css"

const NavigationForAllPages = (props) => {
    const currentRole = UserService.getRole();
    const pradzia = () => {
        if (currentRole === "[PARENT]") {
            return ('/tevai')
        } else if (currentRole === "[EDU]") {
            return ('/admin/edu')
        } else if (currentRole === "[ADMIN]") {
            return ('/admin/pradzia')
        } else {
        }
    }

    return (
        <div className="">
            <nav className="py-3 pr-4 navbar-light">
                <ul className="nav flex-column flex-sm-row">
                    <li className="flex-sm-fill nav-item active">
                        <Link to={pradzia} className="nav-link ">
                            Į pradžią
                        </Link>
                    </li>
                    <span className="navbar-text flex-column flex-sm-row pr-3">
                        Esate prisijungęs kaip {currentRole}
                        {/* reikia sugalvoti, kaip parašyti, vardą*/}
                    </span>
                    <LogoutPresentation />
                </ul>
            </nav>
            {props.children}

        </div>
    );
}
export default NavigationForAllPages