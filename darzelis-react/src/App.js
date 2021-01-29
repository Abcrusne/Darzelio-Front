import React from 'react';
import {Switch, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import RegistrationFormContainer from "./Components/Registration/RegistrationFormContainer"
import LandingPage from "./Components/LandingPage"
import LoginSuccess from "./Components/Login/LoginSuccess";
import PrivateRoute from "./Configuration/PrivateRoute";


const App = () => {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/registracija" component={RegistrationFormContainer} />
          <Route path="/login" component={LandingPage} />
          <PrivateRoute exact path="/dashboard" component={LoginSuccess} roles={"PARENT"} />
          {/*<PrivateRoute exact path="/admin" component={AdminDashboard} />*/}
          {/*<PrivateRoute exact path="/admin/edu" component={EduDashboard} />*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
