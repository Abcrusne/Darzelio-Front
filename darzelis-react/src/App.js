import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegistrationFormContainer from './Components/Registration/RegistrationFormContainer';
import RegistrationSuccessPresentation from './Components/Registration/RegistrationSuccessPresentation';
//import LoginFormContainer from './Components/Login/LoginFormContainer';
import LandingPage from './Components/LandingPage';
import UsersListTableContainer from './Components/UsersListAdmin/UsersListTableContainer';
import NoMatch from './Components/NoMatch/NoMatchPresentation';
import UpdateUserFormContainer from './Components/UsersListAdmin/UpdateUserFormContainer';

import SysAdminLanding from './Components/SysAdminLanding/SysAdminLanding';
import ParentRegistrationFormContainer from './Components/ParentRegistration/ParentRegistrationFormContainer';
<<<<<<< Updated upstream:darzelis-react/src/App.js

import LoginSuccess from "./Components/Login/LoginSuccess";
=======
>>>>>>> Stashed changes:frontas-darzelis/src/App.js
import PrivateRoute from "./Configuration/PrivateRoute";
import ParentLanding from "./Components/ParentLanding/ParentLanding";

import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LandingPage} />
<<<<<<< Updated upstream:darzelis-react/src/App.js
        <PrivateRoute exact path="/dashboard" component={LoginSuccess} role={"PARENT"} />
          {/*<PrivateRoute exact path="/admin/pradzia" component={AdminDashboard} />*/}
          {/*<PrivateRoute exact path="/admin/edu" component={EduDashboard} />*/}
=======
        <PrivateRoute exact path="/dashboard" component={ParentLanding} role={"PARENT"} />
          <PrivateRoute exact path="/admin/pradzia" component={SysAdminLanding} role={"ADMIN"}/>
          <PrivateRoute exact path="/admin/edu" component={EduAdminLanding} role={"EDU"}/>
>>>>>>> Stashed changes:frontas-darzelis/src/App.js
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
          <Route path="/admin/pradzia" component={SysAdminLanding} />
          <Route
            path="/tevai/registracija"
            component={ParentRegistrationFormContainer}
          />
          <Route path="*" component={NoMatch} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
