import React from 'react';

import LogoutPresentation from './LogoutPresentation';
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