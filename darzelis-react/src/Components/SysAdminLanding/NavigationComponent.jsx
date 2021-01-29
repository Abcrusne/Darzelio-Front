import { NavLink } from 'react-router-dom';
import React from 'react';

function NavigationComponent(props) {
  return (
    <div>
      {/* <nav className=" nav flex-column navbar-light bg-light"> */}
      <div className="row ml-5">
        <ul className="nav flex-column ">
          <li className="nav-item disabled">
            <NavLink to="/admin/pradzia" className="nav-link disabled">
              <span class="navbar-brand mb-0 h1">
                Sistemos administratorius
              </span>
            </NavLink>
          </li>
          <li className="nav-item disabled">
            <NavLink to="/admin/pradzia" className="nav-link ">
              Pradžia
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink to="/admin/vartotojai" className="nav-link">
              Vartotojų sąrašas
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/admin/prasymai" className="nav-link">
              Prašymai
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/admin/eiliutvarkymas" className="nav-link">
              Eilių tvarkymas
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">
              Atsijungti
            </NavLink>
          </li>
        </ul>
      </div>
      {/* </nav> */}
      {props.children}
    </div>
  );
}

export default NavigationComponent;
