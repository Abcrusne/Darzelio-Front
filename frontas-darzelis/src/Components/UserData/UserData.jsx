import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import UserService from '../../Configuration/UserService';

const UserData = () => {
  const currentRole = UserService.getRole();

  if (currentRole === '[PARENT]') {
    return (
      <div>
        <h5>
          {' '}
          <NavLink to="/tevai/duomenys/redaguoti" className="nav-link">
            Keisti duomenis
          </NavLink>{' '}
        </h5>
        <h5>
          {' '}
          <NavLink
            to="/tevai/duomenys/redaguoti/slaptazodi"
            className="nav-link"
          >
            Keisti slaptažodį
          </NavLink>{' '}
        </h5>
      </div>
    );
  } else if (currentRole === '[EDU]') {
    return (
      <div>
        <h5>
          {' '}
          <NavLink to="/admin/edu/duomenys/redaguoti" className="nav-link">
            Keisti duomenis
          </NavLink>{' '}
        </h5>
        <h5>
          {' '}
          <NavLink
            to="/admin/edu/duomenys/redaguoti/slaptazodi"
            className="nav-link"
          >
            Keisti slaptažodį
          </NavLink>{' '}
        </h5>
      </div>
    );
  }
};

export default UserData;
