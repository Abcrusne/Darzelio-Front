import React from 'react';

import { useHistory } from 'react-router';
import UserService from "../../Configuration/UserService";

const LogoutPresentation = () => {
  
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    UserService.deleteRole();
    history.push('/');
  };

  return (
    <div className="fixed-top d-flex justify-content-end mt-3 mr-5">
      <button className="btn btn-primary" onClick={logout}>
        Atsijungti veikia localStorage.clear
      </button>
    </div>
  );
};
export default LogoutPresentation;
