import React from 'react';

const LogoutPresentation = ({ logout }) => {
  return (
    <div className="fixed-top d-flex justify-content-end mt-4 mr-5">
      <button className="btn btn-primary" onClick={logout}>
        Atsijungti
      </button>
    </div>
  );
};
export default LogoutPresentation;
