import React from 'react';

import { useHistory } from 'react-router';

const LogoutPresentation = () => {

  const history = useHistory();
  
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="fixed-top d-flex justify-content-end mt-3 mr-5">
      <button className="btn btn-primary" onClick={logout}>
        Atsijungti veikia bet nzn ar taip
      </button>
    </div>
  );
};
export default LogoutPresentation;
