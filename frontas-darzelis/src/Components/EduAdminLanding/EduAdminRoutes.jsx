import React from 'react';
import {Route, Switch} from 'react-router';

//our imports
import PrivateRoute from "../../Configuration/PrivateRoute";
import NotFoundPage from "../Utilities/NotFoundPage";
import EduAdminDashboard from "./EduAdminDashboard";
import ListOfChildren from "../ChildrenRegistration/ListOfChildren";
import ListOfRegistrations from "../MainRegistration/ListOfRegistrations";
import KindergartenListTableContainer from "../KindergartenList/KindergartenListTableContainer";
import KindergartenRegistrationContainer from '../KindergartenList/KindergartenRegistrationContainer';
import UpdateKindergartenFormContainer from '../KindergartenList/UpdateKindergartenFormContainer';
import UpdateUserDataFormContainer from '../UserData/UpdateUserDataFormContainer';
import UserData from '../UserData/UserData';
import UpdateUserPasswordContainer from '../UserData/UpdateUserPasswordContainer';
import KindergartenTableContainer from '../Queue/KindergartenTableContainer';

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
                path="/admin/edu/darzelioregistracija"
                exact
                component={KindergartenRegistrationContainer}
                role={'EDU'}
            />
            <PrivateRoute
                path="/admin/edu/darzeliai/:id"
                exact
                component={UpdateKindergartenFormContainer}
                role={'EDU'}
            />
            <PrivateRoute
        path="/admin/edu/naudotojo-duomenys"
        exact
        component={UserData}
        role={'EDU'}
      />
      <PrivateRoute
        path="/admin/edu/duomenys/redaguoti"
        exact
        component={UpdateUserDataFormContainer}
        role={'EDU'}
      />
      <PrivateRoute
        path="/admin/edu/duomenys/redaguoti/slaptazodi"
        exact
        component={UpdateUserPasswordContainer}
        role={'EDU'}
      />
    
      <PrivateRoute
        // path="/admin/edu/priemimai/:id/eiles"
        path="/admin/edu/priemimai/eiles"
        exact
        component={KindergartenTableContainer}
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
