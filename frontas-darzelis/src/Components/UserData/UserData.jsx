import React from 'react';
import { NavLink } from 'react-router-dom';
import UserService from '../../Configuration/UserService';
import { API } from '../../Configuration/AppConfig';

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
        <h5>
          {' '}
          <NavLink to="/tevai/duomenys/redaguoti/pasta" className="nav-link">
            Keisti el.paštą
          </NavLink>{' '}
        </h5>
        <h5>
          <a
            href={`${API}/api/users/userdata/download`}
            target="_blank"
            className="nav-link"
          >
            Atsisiųsti savo paskyros duomenis
          </a>{' '}
        </h5>
        <h5>
          {' '}
          <NavLink to="/tevai/duomenys/istrinti" className="nav-link">
            Ištrinti paskyrą
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
        <h5>
          <NavLink
            to="/admin/edu/duomenys/redaguoti/pasta"
            className="nav-link"
          >
            Keisti el.paštą
          </NavLink>{' '}
        </h5>
      </div>
    );
  } else if (currentRole === '[ADMIN]') {
    return (
      <div>
        <h5>
          {' '}
          <NavLink
            to="/admin/naudotojo-duomenys/redaguoti"
            className="nav-link"
          >
            Keisti duomenis
          </NavLink>{' '}
        </h5>
        <h5>
          {' '}
          <NavLink
            to="/admin/naudotojo-duomenys/redaguoti/slaptazodi"
            className="nav-link"
          >
            Keisti slaptažodį
          </NavLink>{' '}
        </h5>
        <h5>
          <NavLink
            to="/admin/naudotojo-duomenys/redaguoti/pasta"
            className="nav-link"
          >
            Keisti el.paštą
          </NavLink>{' '}
        </h5>
      </div>
    );
  }
};

export default UserData;
