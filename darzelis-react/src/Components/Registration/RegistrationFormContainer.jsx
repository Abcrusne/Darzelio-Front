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
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // const outputUser = {
    //   email: this.state.email,
    //   firstname: this.state.firstname,
    //   id: this.state.id,
    //   lastname: this.state.lastname,
    //   role: this.state.role,
    //   // successfullyRegister: true,
    // };

    axios
      .post(API + '/api/users', this.state)
      .then((response) => {
        this.props.history.push('/admin/userslist');
      })
      .catch((error) => {
        console.log(error);
      });
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
          {...this.state}
          // successfullyRegister={this.state.successfullyRegister}
        />
      </div>
    );
  }
}
