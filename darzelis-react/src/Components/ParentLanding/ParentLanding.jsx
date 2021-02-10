import React from "react";
import NavigationForAllPages from "../Utilities/NavigationForAllPages";
import {withRouter} from "react-router";
import ParentSideBarNavigation from "./ParentSideBarNavigation";
import ParentLandingDashboard from "./ParentLandingDashboard";
import ParentlandingFooter from "./ParentLandingFooter";

import "./ParentLanding.css"


const ParentLanding = (props) => {

    return(
        <div className="container-fluid">
            <header className=" m-auto bg-white ">
                <NavigationForAllPages/>
            </header>
            <main>
                <div className="row pl-3">
                    <aside className="col-lg-2 col-md-4 col-sm-12 border-0 bg-white" >
                        <ParentSideBarNavigation />
                    </aside>
                    <div  className="col-lg-10 col-md-8 col-sm-12">
                        <ParentLandingDashboard />
                    </div>
                </div>
            </main>
            <footer className="footer pt-3">
                <ParentlandingFooter />
            </footer>
        </div>

    )
};
export default withRouter(ParentLanding)