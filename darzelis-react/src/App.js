import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RegistrationFormContainer from './Components/Registration/RegistrationFormContainer';
import RegistrationSuccessPresentation from './Components/Registration/RegistrationSuccessPresentation';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact
            path="/registracija"
            component={RegistrationFormContainer}
          />
          <Route
            exact
            path="/admin/sekminga"
            component={RegistrationSuccessPresentation}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
