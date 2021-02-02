import React, { Component } from 'react';

import LogoutPresentation from './LogoutPresentation';
import NavigationComponent from './NavigationComponent';

const SysAdminLanding = () => {
  return (
    <div>
      <NavigationComponent />
      <LogoutPresentation />
    </div>
  );
};
export default SysAdminLanding;
