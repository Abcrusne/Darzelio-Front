import React, { Component } from 'react';
import axios from 'axios';

import LoginFormPresentation from './LoginFormPresentation';
import { API } from '../../Configuration/AppConfig';
import { withRouter } from 'react-router';
import UserService from '../../Configuration/UserService';

axios.defaults.withCredentials = true; // leidžia dalintis cookies

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      role: '',
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswdChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmit = (event) => {
    let userData = new URLSearchParams();
    userData.append('username', this.state.email);
    userData.append('password', this.state.password);

    axios
      .post(`${API}/login`, userData, {
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      })
      .then((response) => {
        UserService.setRole(response.data.role);
        this.setState({ role: response.data.role });
        this.props.history.push('/dashboard');
        alert('prisijungta');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert('Slaptažodis arba el.paštas nesutampa!');
        }
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="container mt-5">
        <div></div>
        <LoginFormPresentation
          email={this.state.email}
          password={this.state.password}
          onEmailChange={this.onEmailChange}
          onPasswdChange={this.onPasswdChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
export default withRouter(LoginFormContainer);
