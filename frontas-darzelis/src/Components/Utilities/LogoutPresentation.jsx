import React from 'react';

import { useHistory } from 'react-router';
//import UserService from '../../Configuration/UserService';

const LogoutPresentation = () => {
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    // cookies.remove("user");
    history.push('/');
  };

  return (
    <div className="d-flex justify-content-end">
      <button className="btn" onClick={logout}>
        Atsijungti
      </button>
    </div>
  );
};
export default LogoutPresentation;
