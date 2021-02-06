import React from "react";
import {withRouter} from "react-router";

import NavigationForAllPages from "../Utilities/NavigationForAllPages";

const EduAdminLanding = (props) => {

        return(
            <div className="">
                <div className="card">
                    <NavigationForAllPages/>
                </div>
            </div>

        )
}
export default withRouter(EduAdminLanding)