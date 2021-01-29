import React, { Component } from 'react';
import RegistrationFormContainer from '../Registration/RegistrationFormContainer';

import LogoutPresentation from './LogoutPresentation';
import NavigationComponent from './NavigationComponent';

export default class SysAdminLanding extends Component {
  logout() {
    localStorage.clear();
    window.location.href = '/';
  }
  render() {
    return (
      <div>
        <NavigationComponent />

        <LogoutPresentation logout={this.logout} />
      </div>
    );
  }
}
