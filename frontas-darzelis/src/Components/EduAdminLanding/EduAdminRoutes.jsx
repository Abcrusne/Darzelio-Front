import React from 'react';
import {Route, Switch} from 'react-router';

//our imports
import PrivateRoute from "../../Configuration/PrivateRoute";
import NotFoundPage from "../Utilities/NotFoundPage";
import EduAdminDashboard from "./EduAdminDashboard";
import ListOfChildren from "../ChildrenRegistration/ListOfChildren";
import ListOfRegistrations from "../MainRegistration/ListOfRegistrations";
import KindergartenListTableContainer from "../KindergartenList/KindergartenListTableContainer";
import KindergartenRegistrationContainer from "../KindergartenList/KindergartenRegistrationContainer"

const EduAdminRoutes = () => {
    return (
        <Switch>
            <PrivateRoute
                path="/admin/edu"
                exact
                component={EduAdminDashboard}
                role={'EDU'}
            />
            {/*<PrivateRoute */}
            {/*path="/admin/edu/naudotojo-duomenys"*/}
            {/*exact*/}
            {/*component={NaudotojoDuomenys}*/}
            {/*role={'EDU'}*/}
            {/*/>*/}
            <PrivateRoute
                path="/admin/edu/vaikai"
                exact
                component={ListOfChildren}
                role={'EDU'}
            />
            <PrivateRoute
                path="/admin/edu/registracijos"
                exact
                component={ListOfRegistrations}
                role={'EDU'}
            />
            <PrivateRoute
                path="/admin/edu/darzeliai"
                exact
                component={KindergartenListTableContainer}
                role={'EDU'}
            />
            <PrivateRoute
                path="/admin/edu/darzeliai/registracija"
                exact
                component={KindergartenRegistrationContainer}
                role={'EDU'}
            />
            <PrivateRoute
                path="/admin/edu/*"
                exact
                component={NotFoundPage}
                role={'EDU'}
            />
        </Switch>
    );
};
export default EduAdminRoutes;
