import React from "react";
import {Link} from "react-router-dom";

const LoginFormPresentation = ({email, password, onPasswdChange, onEmailChange, onSubmit}, context) => {

    return(
        <div className="col-lg-5 m-auto shadow p-3 mb-5 bg-white rounded" onSubmit={onSubmit} >
            <div className="mb-4">
                <h3>Prisijungti</h3>
            </div>
            <form className="form-group">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="control-label">Elektroninio pašto adresas</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        autoComplete="username"
                        aria-describedby="emailHelp"
                        onChange={onEmailChange}
                        value={email}
                        required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="control-label">Slaptažodis</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        autoComplete="current-password"
                        onChange={onPasswdChange}
                        value={password}
                        required/>
                </div>
                {/*<div className="mb-3 form-check">*/}
                {/*    <input type="checkbox" className="form-check-input" id="prisiminti" required/>*/}
                {/*    <label className="form-check-label" htmlFor="prisiminti">Prisiminti mane</label>*/}
                {/*</div>*/}
                <button type="submit" className="mr-4 btn btn-success">Prisijungti</button>
                <Link to="/registracija">Naujo vartotojo registracija</Link>
            </form>
        </div>
    )
}

export default LoginFormPresentation