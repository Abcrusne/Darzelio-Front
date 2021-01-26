import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import RegistrationFormPresentation from './RegistrationFormPresentation';

export default class RegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      role: '',
      password: '',
      // confirmPassword: '',
      // id: 0,
      // successfullyRegister: false,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
    this.setState({
      [id]: value,
    });
    // console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //sitos dalies prireiks kai pats tevas gales keisti
    // if (this.state.password !== this.state.confirmPassword) {
    //   alert('Slaptažodžiai nesutampa!');
    // } else {
    //console.log(this.state);
    const outputUser = {
      email: this.state.email,
      firstname: this.state.firstname,
      id: this.state.id,
      lastname: this.state.lastname,
      role: this.state.role,
      password: this.state.lastname,
      // confirmPassword: this.state.confirmPassword,
      // successfullyRegister: true,
    };

    axios
      .post(API + '/api/users', outputUser)
      .then((response) => {
        this.props.history.push('/admin/sekminga');
      })
      .catch((error) => {
        console.log(error);
      });
    // }
    // const registUser = async () => {
    //   try {
    //     const response = await axios
    //       .post(API + '/api/vartotojai', outputUser)
    //       .then((response) => {
    //         this.props.history.push('/papostina_i_adminopsl_vartotoju_sarasa');
    //         console.log(response.data);
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   registUser();
    // };
  };

  render() {
    return (
      <div>
        <RegistrationFormPresentation
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          email={this.state.email}
          role={this.state.role}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          {...this.state}
          // successfullyRegister={this.state.successfullyRegister}
        />
      </div>
    );
  }
}
