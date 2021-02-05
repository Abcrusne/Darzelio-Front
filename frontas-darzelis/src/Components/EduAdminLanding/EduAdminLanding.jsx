import React from "react";
import {withRouter} from "react-router";

import UserService from "../../Configuration/UserService";

const EduAdminLanding = (props) => {

        const logOut = (event) => {
            event.preventDefault();
            UserService.deleteRole();
            props.history.push("/");
        }

        return(
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        Sveikiname sėkmingai prisijungus į Darželio administratoriaus paskyrą!
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={logOut}
                    >
                        Atsijungti
                    </button>
                </div>
            </div>

        )
}
export default withRouter(EduAdminLanding)