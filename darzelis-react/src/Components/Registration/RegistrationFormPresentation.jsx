import React from 'react';
import { Link } from 'react-router-dom';
//import RegistrationSuccessPresentation from './RegistrationSuccessPresentation';

function RegistrationFormPresentation( {handleChange,
  handleSubmit,
  firstname,
  lastname,
  email,
  role,
 ...otherProps})
   {
  return (
    <form className="col-lg-12 offset-lg-4 " onSubmit={handleSubmit}>
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
            value={firstname}
            onChange={(e) => handleChange(e)}
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
            value={lastname}
            onChange={handleChange}
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
            value={email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">
          <b>Pasirinkite rolę</b>
        </label>
        <div className="col-sm-3">
          <select
            type="text"
            className="form-control"
            id="role"
            placeholder="Role"
            value={role}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="PARENT">Tėvas/globėjas</option>
            <option value="KINDERGARTEN">Švietimo specialistas</option>
          </select>
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
      {/* <div>
        <h1>
          {successfullyRegister ? (
            <RegistrationSuccessPresentation />
          ) : null}
        </h1>
      </div> */}
    </form>
  );
};
export default RegistrationFormPresentation;
