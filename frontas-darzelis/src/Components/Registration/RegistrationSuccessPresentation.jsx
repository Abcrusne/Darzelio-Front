import React, { Component } from 'react';
import LogoutPresentation from '../Utilities/LogoutPresentation';

import NavigationForAllPages from '../Utilities/NavigationForAllPages';
//import { Link } from 'react-router-dom';

export default class RegistrationSuccessPresentation extends Component {
  render() {
    return (
      <div className="container mt-5">
        <NavigationForAllPages />
        {/* <LogoutPresentation /> */}
        <div className=" justify-content-center">
          <div className="col-10">
            <h5>Registracija sėkminga.</h5>
          </div>
        </div>
      </div>
    );
  }
}
