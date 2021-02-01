import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationSuccessPresentation from './RegistrationSuccessPresentation';

const RegistrationFormPresentation = (props) => {
  return (
    <form className="col-lg-12 offset-lg-4 " onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label className="col-sm-2 control-label">
          <b>Jūsų vardas</b>
        </label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Vardas"
            value={props.firstname}
            onChange={props.handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">
          <b>Jūsų pavardė</b>
        </label>
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Pavardė"
            value={props.lastname}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">
          <b>Jūsų el.paštas</b>
        </label>
        <div className="col-sm-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={props.email}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <Link to={'/'} className="btn btn-default">
          Grįžti į pradinį puslapį
        </Link>
        <button type="submit" className="btn btn-success">
          Registruotis
        </button>
      </div>
      <div>
        <h1>
          {props.successfullyRegister ? (
            <RegistrationSuccessPresentation />
          ) : null}
        </h1>
      </div>
    </form>
  );
};
export default RegistrationFormPresentation;
