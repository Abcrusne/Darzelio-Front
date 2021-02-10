import React from 'react';

import { useHistory } from 'react-router';
import "./Logout.css"
import UserService from '../../Configuration/UserService';

const LogoutPresentation = () => {
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    // cookies.remove("user");
    history.push('/');
  };

  return (
<<<<<<< Updated upstream:darzelis-react/src/Components/SysAdminLanding/LogoutPresentation.jsx
    <div className="fixed-top d-flex justify-content-end mt-3 mr-5">
      <button className="btn btn-primary" onClick={logout}>
=======
      <button className="" onClick={logout}>
>>>>>>> Stashed changes:frontas-darzelis/src/Components/Utilities/LogoutPresentation.jsx
        Atsijungti
      </button>

  );
};
export default LogoutPresentation;
