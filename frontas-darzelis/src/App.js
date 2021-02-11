import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//our imports
import RegistrationFormContainer from './Components/Registration/RegistrationFormContainer';
import RegistrationSuccessPresentation from './Components/Registration/RegistrationSuccessPresentation';
import EduAdminLanding from './Components/EduAdminLanding/EduAdminLanding';
import LandingPage from './Components/LandingPage';
import UsersListTableContainer from './Components/UsersListAdmin/UsersListTableContainer';
import NoMatch from './Components/NoMatch/NoMatchPresentation';
import UpdateUserFormContainer from './Components/UsersListAdmin/UpdateUserFormContainer';
import SysAdminLanding from './Components/SysAdminLanding/SysAdminLanding';
import ParentRegistrationFormContainer from './Components/ParentRegistration/ParentRegistrationFormContainer';
import LoginSuccess from './Components/Login/LoginSuccess';
import PrivateRoute from './Configuration/PrivateRoute';
import ChildrenRegistrationFormContainer from './Components/ChildrenRegistration/ChildrenRegistrationFormContainer';
import NextPage from './Components/ChildrenRegistration/NextPage';
import KindergartenListTableContainer from './Components/KindergartenList/KindergartenListTableContainer';
import KindergartenRegistrationContainer from './Components/KindergartenList/KindergartenRegistrationContainer';
import UpdateKindergartenFormContainer from './Components/KindergartenList/UpdateKindergartenFormContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LandingPage} />
          <PrivateRoute
            exact
            path="/dashboard"
            component={LoginSuccess}
            role={'PARENT'}
          />
          <PrivateRoute
            exact
            path="/admin/pradzia"
            component={SysAdminLanding}
            role={'ADMIN'}
          />
          <PrivateRoute
            exact
            path="/admin/edu"
            component={EduAdminLanding}
            role={'EDU'}
          />
          <Route
            exact
            path="/admin/registracija"
            component={RegistrationFormContainer}
          />
          <Route
            exact
            path="/admin/sekminga"
            component={RegistrationSuccessPresentation}
          />

          <Route
            exact
            path="/admin/vartotojai"
            component={UsersListTableContainer}
          />
          <Route
            path="/admin/vartotojai/:id"
            component={UpdateUserFormContainer}
          />
          <Route
            path="/tevai/registracija"
            component={ParentRegistrationFormContainer}
          />
          <Route
            path="/tevai/vaikoregistracija"
            component={ChildrenRegistrationFormContainer}
          />
          <Route path="/tevai/toliau" component={NextPage} />
          <Route
           exact
            path="/admin/edu/darzeliai"
            component={KindergartenListTableContainer}
          />
          <Route
            path="/admin/edu/darzelioregistracija"
            component={KindergartenRegistrationContainer}
          />
          <Route
            path="/admin/edu/darzeliai/:id"
            component={UpdateKindergartenFormContainer}
          />

          <Route path="*" component={NoMatch} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
