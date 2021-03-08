import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/UsersLandings.css';

const EduAdminSideBarNavigation = () => {
    return (
            <nav className="sidebar pt-3 mt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link
                            to="/admin/edu/naudotojo-duomenys"
                            className="nav-link active"
                            id="userData"
                        >
                            <i className="fas fa-user"></i>
                            Naudotojo duomenys
                        </Link>
                        <hr />
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/edu/vaikai"
                            className="nav-link active"
                            id="parentForm"
                        >
                            <i className="fas fa-list-ol"></i>
                            Vaikų registracijų sąrašas
                        </Link>
                    </li>
                    <li className="nav-item">
                        {/*<Link*/}
                        {/*    to="/admin/edu/registracijos"*/}
                        {/*    className="nav-link active"*/}
                        {/*    id="childForm"*/}
                        {/*>*/}
                        {/*    <i class="fas fa-list-ol"></i>*/}
                        {/*    Registracijų sąrašas*/}
                        {/*</Link>*/}
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/edu/darzeliai"
                            className="nav-link active"
                            id="mainRegForm"
                        >
                            <i className="fas fa-list-ol"></i>
                            Darželių sąrašas
                        </Link>
                        <hr />
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/edu/priemimai/eiles"
                            className="nav-link active"
                            id="mainRegForm"
                        >
                            <i className="fas fa-list-ol"></i>
                            Darželių eilės
                        </Link>
                        <hr />
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/admin/edu/darzelioregistracija"
                            className="nav-link active"
                            id="mainRegForm"
                        >
                            <i className="fas fa-file-contract"></i>
                            Pridėti darželį
                        </Link>
                        <hr />
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/edu/statistika" className="nav-link active">
                            <i className="fas fa-info"></i>
                            Statistika
                        </Link>
                    </li>
                </ul>
            </nav>
    );
};
export default EduAdminSideBarNavigation;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../../Style/UsersLandings.css';

// const EduAdminSideBarNavigation = () => {
//   return (
//     <nav className="sidebar pt-3 mt-3">
//       <ul className="nav flex-column">
//         <li className="nav-item">
//           <Link
//             to="/admin/edu/naudotojo-duomenys"
//             className="nav-link active"
//             id="userData"
//           >
//             <i className="fas fa-user"></i>
//             Naudotojo duomenys
//           </Link>
//           <hr />
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/admin/edu/vaikai"
//             className="nav-link active"
//             id="parentForm"
//           >
//             <i className="fas fa-file-contract"></i>
//             Vaikų sąrašas
//           </Link>
//         </li>
    
//         <li className="nav-item">
//           <Link
//             to="/admin/edu/priemimai/eiles"
//             className="nav-link active"
//             id="mainRegForm"
//           >
//             <i className="fas fa-file-contract"></i>
//             Darželių eilės
//           </Link>
//         </li>
                 
//         <li className="nav-item">
//           <Link
//             to="/admin/edu/darzeliai"
//             className="nav-link active"
//             id="mainRegForm"
//           >
//             <i className="fas fa-file-contract"></i>
//             Darželių sąrašas
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/admin/edu/darzelioregistracija"
//             className="nav-link active"
//             id="mainRegForm"
//           >
//             <i className="fas fa-file-contract"></i>
//             Pridėti darželį
//           </Link>
//           <hr />
//         </li>
//         <li className="nav-item">
//           <Link to="/admin/edu/statistika" className="nav-link active">
//             <i className="fas fa-info"></i>
//             Statistika
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };
// export default EduAdminSideBarNavigation;
