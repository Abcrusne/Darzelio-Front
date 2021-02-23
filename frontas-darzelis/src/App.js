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

import PrivateRoute from "./Configuration/PrivateRoute";
import ChildrenRegistrationFormContainer from './Components/ChildrenRegistration/ChildrenRegistrationFormContainer';
import NextPage from './Components/ChildrenRegistration/NextPage';
import ParentLanding from "./Components/ParentLanding/ParentLanding";
import ParentRoutes from "./Components/ParentLanding/ParentRoutes";
import ParentLandingDashboard from "./Components/ParentLanding/ParentLandingDashboard";
import ParentUserdata from "./Components/ParentLanding/ParentUserdata";
import MainRegistrationContainer from "./Components/MainRegistration/MainRegistrationContainer";
import NotFoundPage from "./Components/Utilities/NotFoundPage";
import KindergartenListTableContainer from './Components/KindergartenList/KindergartenListTableContainer';
import KindergartenRegistrationContainer from './Components/KindergartenList/KindergartenRegistrationContainer';
import UpdateKindergartenFormContainer from './Components/KindergartenList/UpdateKindergartenFormContainer';
import EduAdminDashboard from "./Components/EduAdminLanding/EduAdminDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LandingPage} />
        <PrivateRoute exact path="/tevai" component={ParentLanding} role={"PARENT"} />
        <PrivateRoute path='/tevai/naudotojo-duomenys' exact component={ParentLanding} role={"PARENT"}/>
        <PrivateRoute path='/tevai/registracija' exact component={ParentLanding} role={"PARENT"}/>
        <PrivateRoute path='/tevai/registracija/redaguoti' exact component={ParentLanding} role={"PARENT"}/>
        <PrivateRoute path='/tevai/vaikoregistracija' exact component={ParentLanding} role={"PARENT"}/>
        <PrivateRoute path='/tevai/registracija-i-darzeli' exact component={ParentLanding} role={"PARENT"}/>
        <PrivateRoute path='/tevai/toliau' exact component={ParentLanding} role={"PARENT"}/>
        <PrivateRoute path='/tevai/*' exact component={ParentLanding} role={"PARENT"}/>
        <PrivateRoute exact path="/admin/pradzia" component={SysAdminLanding} role={"ADMIN"}/>
        <PrivateRoute exact path="/admin/edu" component={EduAdminLanding} role={"EDU"}/>
        <PrivateRoute
            path="/admin/edu"
            exact
            component={EduAdminLanding}
            role={'EDU'}
        />
        {/*<PrivateRoute */}
        {/*path="/admin/edu/naudotojo-duomenys"*/}
        {/*exact*/}
        {/*component={EduAdminLanding}*/}
        {/*role={'EDU'}*/}
        {/*/>*/}
        <PrivateRoute
            path="/admin/edu/vaikai"
            exact
            component={EduAdminLanding}
            role={'EDU'}
        />
        <PrivateRoute
            path="/admin/edu/registracijos"
            exact
            component={EduAdminLanding}
            role={'EDU'}
        />
        <PrivateRoute
            path="/admin/edu/darzeliai"
            exact
            component={EduAdminLanding}
            role={'EDU'}
        />
        <PrivateRoute
            path="/admin/edu/*"
            exact
            component={EduAdminLanding}
            role={'EDU'}
        />
    
          <PrivateRoute exact path="/tevai/toliau" component={NextPage} />
          <PrivateRoute
           exact
            path="/admin/edu/darzeliai"
            component={KindergartenListTableContainer}
          />
          <PrivateRoute
            path="/admin/edu/darzelioregistracija"
            exact
            component={KindergartenRegistrationContainer}
          />
          <PrivateRoute
            path="/admin/edu/darzeliai/:id"
            exact
            component={UpdateKindergartenFormContainer}
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
          path="/admin/darzelioregistracija"
          component={KindergartenRegistrationContainer}
        />
         <Route
           exact
            path="/admin/darzeliai"
            component={KindergartenListTableContainer}
          />
          <Route
            path="/admin/darzeliai/:id"
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
