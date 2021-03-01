import React from 'react';
import { Switch } from 'react-router';
import PrivateRoute from '../../Configuration/PrivateRoute';
import KindergartenListTableContainer from '../KindergartenList/KindergartenListTableContainer';
import KindergartenRegistrationContainer from '../KindergartenList/KindergartenRegistrationContainer';
import UpdateKindergartenFormContainer from '../KindergartenList/UpdateKindergartenFormContainer';
import RegistrationFormContainer from '../Registration/RegistrationFormContainer';
import RegistrationSuccessPresentation from '../Registration/RegistrationSuccessPresentation';
import UpdateUserFormContainer from '../UsersListAdmin/UpdateUserFormContainer';
import UsersListTableContainer from '../UsersListAdmin/UsersListTableContainer';
import SysAdminLanding from './SysAdminLanding';
import NotFoundPage from '../Utilities/NotFoundPage';
import { SysAdminDashboard } from './SysAdminDashboard';

export const AdminRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          path="/admin/pradzia"
          exact
          component={SysAdminDashboard}
          role={'ADMIN'}
        />
        <PrivateRoute
          exact
          path="/admin/vartotojai"
          component={UsersListTableContainer}
          role={'ADMIN'}
        />
        <PrivateRoute
          path="/admin/vartotojai/:id"
          component={UpdateUserFormContainer}
          role={'ADMIN'}
        />
        <PrivateRoute
          exact
          path="/admin/registracija"
          component={RegistrationFormContainer}
          role={'ADMIN'}
        />
        <PrivateRoute
          exact
          path="/admin/sekminga"
          component={RegistrationSuccessPresentation}
          role={'ADMIN'}
        />
        <PrivateRoute
          exact
          path="/admin/darzelioregistracija"
          component={KindergartenRegistrationContainer}
          role={'ADMIN'}
        />
        <PrivateRoute
          exact
          path="/admin/darzeliai"
          component={KindergartenListTableContainer}
          role={'ADMIN'}
        />
        <PrivateRoute
          path="/admin/darzeliai/:id"
          component={UpdateKindergartenFormContainer}
          role={'ADMIN'}
        />
        <PrivateRoute
          path="/admin/*"
          exact
          component={NotFoundPage}
          role={'ADMIN'}
        />
      </Switch>
    </div>
  );
};
