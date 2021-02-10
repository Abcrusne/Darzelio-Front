import React, { Component } from 'react';

import LogoutPresentation from '../Utilities/LogoutPresentation';
import NavigationComponent from './NavigationComponent';

const SysAdminLanding = () => {
  return (
    <div className="container mt-5">
      <NavigationComponent />
      <LogoutPresentation />
    </div>
  );
};
export default SysAdminLanding;
