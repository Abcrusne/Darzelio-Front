import React from 'react';
import { Link } from 'react-router-dom';

export const SysAdminSideBarNavigation = () => {
  return (
    <nav className="sidebar pt-3 mt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin/naudotojo-duomenys" className="nav-link active" >
            <i className="fas fa-user"></i>
            Sistemos administratorius
          </Link>
          <hr />
        </li>
        <li className="nav-item">
          <Link
            to="/admin/vartotojai"
            className="nav-link active"
           
          >
            <i className="fas fa-file-contract"></i>
            Vartotojų sąrašas
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/darzeliai"
            className="nav-link active"
          
          >
            <i className="fas fa-file-contract"></i>
            Darželių sąrašas
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/prasymai"
            className="nav-link active"
           
          >
            <i className="fas fa-file-contract"></i>
            Prašymai
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/admin/eiliutvarkymas"
            className="nav-link active">
            <i className="fas fa-file-contract"></i>
            Eilių tvarkymas
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/statistika" className="nav-link active">
            <i className="fas fa-info"></i>
            Statistika
          </Link>
        </li>
      </ul>
    </nav>
  );
};
