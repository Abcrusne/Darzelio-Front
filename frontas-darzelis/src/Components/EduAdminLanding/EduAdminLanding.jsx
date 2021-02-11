import React from "react";
import {withRouter} from "react-router";

import NavigationForAllPages from "../Utilities/NavigationForAllPages";
import "../../Style/ParentLanding.css"
import ParentSideBarNavigation from "../ParentLanding/ParentSideBarNavigation";
import ParentRoutes from "../ParentLanding/ParentRoutes";
import ParentlandingFooter from "../ParentLanding/ParentLandingFooter";

const EduAdminLanding = (props) => {

        return(
                <div className="container-fluid">
                    <header className=" m-auto bg-white ">
                        <NavigationForAllPages/>
                    </header>
                    <div className="row pl-3">
                        <aside className="col-lg-2 col-md-4 col-sm-12 border-0 bg-white">
                            {/*<ParentSideBarNavigation/>*/}
                            <p>Šoninis meniu</p>
                        </aside>
                        <main id="content" className="col-lg-10 col-md-8 col-sm-12">
                            {/*<ParentRoutes/>*/}
                            <div className="m-auto">
                                <h1>Dashboard</h1>
                            </div>

                        </main>
                    </div>
                    <footer className="footer pt-3">
                        <ParentlandingFooter/>
                    </footer>
                </div>
        )
}
export default withRouter(EduAdminLanding)