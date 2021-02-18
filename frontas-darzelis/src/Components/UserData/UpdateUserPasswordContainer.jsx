import React, { Component } from 'react';

export default class UpdateUserPasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      role: '',
      //currentPassword
      password: '',

      newPassword: '',
      confirmPassword: '',

      errors: {
        firstname: '',
        lastname: '',
        email: '',
     //slaptazodziu validacijos Didzioji Raide, mazoji raide, skaicius, 8 ilgis. 
     //ar password = senam password
     //ar new = confirm
        password: '',
        newPassword: '',
        confirmPassword: '',
      },
    };
  }
  render() {
    return <div></div>;
  }
}
