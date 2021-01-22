import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class RegistrationSuccessPresentation extends Component {
    render() {
        return (
            <div className=" justify-content-center">
            <div className="col-10">
              <h5>
              Registracija sėkminga. 
              </h5>
              <h5>
              Jūsų nurodytu el.paštu išsiųsti prisijungimo duomenys
              </h5>
              {/* <Link to={'/'} className="btn btn-default">
            Grįžti į pradinį puslapį
          </Link> */}
            </div>
          </div>
        )
    }
}
