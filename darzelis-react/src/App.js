import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RegistrationFormContainer from "./Components/Registration/RegistrationFormContainer"

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
