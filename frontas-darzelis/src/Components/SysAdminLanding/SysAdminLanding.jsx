import React from 'react';
import {withRouter} from "react-router";
import NavigationForAllPages from '../Utilities/NavigationForAllPages';
import { AdminRoutes } from './AdminRoutes';

import { SysAdminSideBarNavigation } from './SysAdminSideBarNavigation';

const SysAdminLanding = () => {
  return (
    <div className="container-fluid">
      <header className=" m-auto bg-white ">
        <NavigationForAllPages />
      </header>
      <div className="row pl-3">
        <aside className="col-lg-2 col-md-4 col-sm-12 border-0 bg-white">
          <SysAdminSideBarNavigation />
        </aside>
        <main id="content" className="col-lg-10 col-md-8 col-sm-12">
         <AdminRoutes/>
        </main>
        {/* <footer className="footer pt-3">
                        
                    </footer> */}
      </div>
    </div>
  );
};
export default  withRouter(SysAdminLanding);
