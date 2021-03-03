
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/UsersLandings.css';

const ParentSideBarNavigation = () => {
  return (
    <nav className="pt-3 mt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to="/tevai/naudotojo-duomenys"
            className="nav-link active"
            id="userData"
          >
            <i className="fas fa-user"></i>
            Naudotojo duomenys
          </Link>
          <hr />
        </li>
        {/* <li className="nav-item">
                    <Link to="/tevai/registracija/redaguoti" className="nav-link active" id="parentForm">
                        <i className="fas fa-file-contract"></i>
                        Tėvo (globėjo) anketa
                    </Link>
                </li> */}
        <li className="nav-item">
          <Link
            to="/tevai/registracija/redaguoti"
            className="nav-link active"
            id="parentForm"
          >
            <i className="fas fa-file-contract"></i>
            Redaguoti tėvo (globėjo) anketą
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/tevai/vaikoregistracija"
            className="nav-link active"
            id="childForm"
          >
            <i className="fas fa-file-contract"></i>
            Pildyti vaiko duomenų anketą
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/tevai/registracija-i-darzeli"
            className="nav-link active"
            id="mainRegForm"
          >
            <i className="fas fa-file-contract"></i>
            Prašymas registruoti į darželį
          </Link>
        </li>
        <li className="nav-item">

          <Link to="/tevai/vaikai" className="nav-link active" id="childForm">
            <i className="fas fa-file-contract"></i>
            Peržiūrėti/Redaguoti vaikų duomenis ir prašymus

          </Link>
        </li>
        {/*<li className="nav-item">*/}
        {/*    <Link to="/dashboard/prasymai" className="nav-link active">*/}
        {/*        <i className="fas fa-envelope"></i>*/}
        {/*        Valdyti prašymus*/}
        {/*    </Link>*/}
        {/*</li>*/}
        <li className="nav-item">
          <Link to="/tevai/ikelti" className="nav-link active" id="uploadPdf">
            <i className="fas fa-file-contract"></i>
            Įkelti PDF dokumentus
          </Link>
          <hr />
        </li>
        <li className="nav-item">
          <Link to="/tevai/tvarka" className="nav-link active">
            <i className="fas fa-info"></i>
            Vaikų priėmimo tvarka
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tevai/statistika" className="nav-link active">
            <i className="fas fa-info"></i>
            Statistika
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tevai/salygos" className="nav-link active">
            <i className="fas fa-info"></i>
            Sąlygos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default ParentSideBarNavigation;


// import React, { Component } from 'react';
// import { API } from '../../Configuration/AppConfig';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default class ParentSideBarNavigation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       parentId: '',
//       children: [],
//     };
//   }
//   componentDidMount() {
//     axios
//       .get(`${API}/api/users/getparentdetails`)
//       .then((res) => {
//         this.setState({
//           parentId: res.data.id,
//         });
//         return axios.get(`${API}/api/users/getloggeduserchildren`);
//       })
//       .then((res) => {
//         this.setState({
//           children: res.data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }
//   render() {
//     return (
//       <nav className="pt-3 mt-3">
//         <ul className="nav flex-column">
//           <li className="nav-item">
//             <Link
//               to="/tevai/naudotojo-duomenys"
//               className="nav-link active"
//               id="userData"
//             >
//               <i className="fas fa-user"></i>
//               Naudotojo duomenys
//             </Link>
//             <hr />
//           </li>
//           {/* <li className="nav-item">
//                     <Link to="/tevai/registracija/redaguoti" className="nav-link active" id="parentForm">
//                         <i className="fas fa-file-contract"></i>
//                         Tėvo (globėjo) anketa
//                     </Link>
//                 </li> */}
//           {/* {this.state.parentId > 0 ? ( */}
//           <li className="nav-item">
//             <Link
//               to="/tevai/registracija/redaguoti"
//               className="nav-link active"
//               id="parentForm"
//             >
//               <i className="fas fa-file-contract"></i>
//               Redaguoti tėvo (globėjo) anketą
//             </Link>
//           </li>
//           {/* ) : null} */}

//           {/* {this.state.parentId > 0 ? ( */}
//           <li className="nav-item">
//             <Link
//               to="/tevai/vaikoregistracija"
//               className="nav-link active"
//               id="childForm"
//             >
//               <i className="fas fa-file-contract"></i>
//               Pildyti vaiko duomenų anketą
//             </Link>
//           </li>
//           {/* ) : null} */}
//           {/* {this.state.children.length > 0 ? ( */}
//           {/* {this.state.parentId > 0 ? ( */}
//           <li className="nav-item">
//             <Link
//               to="/tevai/registracija-i-darzeli"
//               className="nav-link active"
//               id="mainRegForm"
//             >
//               <i className="fas fa-file-contract"></i>
//               Prašymas registruoti į darželį
//             </Link>
//           </li>
//           {/* ) : null} */}
//           {/* {this.state.children.length > 0 ? ( */}
//           {/* {this.state.parentId > 0 ? ( */}
//           <li className="nav-item">
//             <Link to="/tevai/vaikai" className="nav-link active" id="childForm">
//               <i className="fas fa-file-contract"></i>
//               Peržiūrėti/Redaguoti vaikų duomenis ir prašymus
//             </Link>
//           </li>
//           {/* ) : null} */}

//           {/*<li className="nav-item">*/}
//           {/*    <Link to="/dashboard/prasymai" className="nav-link active">*/}
//           {/*        <i className="fas fa-envelope"></i>*/}
//           {/*        Valdyti prašymus*/}
//           {/*    </Link>*/}
//           {/*</li>*/}
//           {/* {this.state.parentId > 0 ? ( */}
//           <li className="nav-item">
//             <Link to="/tevai/ikelti" className="nav-link active" id="uploadPdf">
//               <i className="fas fa-file-contract"></i>
//               Įkelti PDF dokumentus
//             </Link>
//             <hr />
//           </li>
//           {/* ) : null} */}
//           <li className="nav-item">
//             <Link to="/tevai/tvarka" className="nav-link active">
//               <i className="fas fa-info"></i>
//               Vaikų priėmimo tvarka
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/tevai/statistika" className="nav-link active">
//               <i className="fas fa-info"></i>
//               Statistika
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/tevai/salygos" className="nav-link active">
//               <i className="fas fa-info"></i>
//               Sąlygos
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }
