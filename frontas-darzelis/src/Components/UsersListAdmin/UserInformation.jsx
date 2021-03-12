import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class UserInformation extends Component {
    render() {
        return (
            <div>
                <h5>
          {' '}
          <NavLink to={`/admin/duomenys/tevo/${this.props.match.params.id}`} className="nav-link">
            Tėvo duomenys
          </NavLink>{' '}
        </h5> 
        <h5>
          {' '}
          <NavLink to={`/admin/duomenys/vaikai/${this.props.match.params.id}`} className="nav-link">
            Vaikų duomenys
          </NavLink>{' '}
        </h5> 
            </div>
        )
    }
}
