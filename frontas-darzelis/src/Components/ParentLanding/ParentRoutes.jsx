import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

//our imports
import PrivateRoute from '../../Configuration/PrivateRoute';
import ParentLandingDashboard from './ParentLandingDashboard';
import ParentUserdata from './ParentUserdata';
import ParentRegistrationFormContainer from '../ParentRegistration/ParentRegistrationFormContainer';
import ChildrenRegistrationFormContainer from '../ChildrenRegistration/ChildrenRegistrationFormContainer';
import MainRegistrationContainer from '../MainRegistration/MainRegistrationContainer';
import NotFoundPage from './NotFoundPage';
import NextPage from "../ChildrenRegistration/NextPage"

const ParentRoutes = () => {
  return (
    <Switch>
      <PrivateRoute
        path="/tevai"
        exact
        component={ParentLandingDashboard}
        role={'PARENT'}
      />
      <PrivateRoute
        path="/tevai/naudotojo-duomenys"
        exact
        component={ParentUserdata}
        role={'PARENT'}
      />
      <PrivateRoute
        path="/tevai/registracija"
        exact
        component={ParentRegistrationFormContainer}
        role={'PARENT'}
      />
      <PrivateRoute
        path="/tevai/vaikoregistracija"
        exact
        component={ChildrenRegistrationFormContainer}
        role={'PARENT'}
      />
      <PrivateRoute
        path="/tevai/toliau"
        exact
        component={NextPage}
        role={'PARENT'}
      />
      <PrivateRoute
        path="/tevai/registracija-i-darzeli"
        exact
        component={MainRegistrationContainer}
        role={'PARENT'}
      />
      <PrivateRoute
        path="/tevai/*"
        exact
        component={NotFoundPage}
        role={'PARENT'}
      />
    </Switch>
  );
};

export default ParentRoutes;
