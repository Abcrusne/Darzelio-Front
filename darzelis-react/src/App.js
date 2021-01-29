import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegistrationFormContainer from './Components/Registration/RegistrationFormContainer';
import RegistrationSuccessPresentation from './Components/Registration/RegistrationSuccessPresentation';
import LoginFormContainer from './Components/Login/LoginFormContainer';
import LandingPage from './Components/LandingPage';
import UsersListTableContainer from './Components/UsersListAdmin/UsersListTableContainer';
import NoMatch from './Components/NoMatch/NoMatchPresentation';
import UpdateUserFormContainer from './Components/UsersListAdmin/UpdateUserFormContainer';
import NavigationComponent from './Components/SysAdminLanding/NavigationComponent';
import SysAdminLanding from './Components/SysAdminLanding/SysAdminLanding';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        
        <Switch>
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
          <Route exact path="/" component={LandingPage} />
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
            path="/admin/pradzia"
            component={SysAdminLanding}
          />
          <Route path="*" component={NoMatch} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
