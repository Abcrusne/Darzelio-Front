import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import RegistrationFormPresentation from './RegistrationFormPresentation';
import ReactJoiValidations from 'react-joi-validation';
import Joi from 'joi-browser';

ReactJoiValidations.setJoi(Joi);



export default class RegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      role: '',
      password: '',
      // emailError: '',
      // error: null
      // confirmPassword: '',
      // id: 0,
    };
  }
 schema = {
    firstname: Joi.string()
      .trim()
      .min(2)
      .max(30)
      .alphanum()
     .required(),
  
    lastname: Joi.string()
      .min(2)
      .max(50)
      .alphanum()
      .required(),
  
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
  };
  
validate = () => {
  const result = Joi.validate(this.state.firstname, this.state.lastname,this.state.email, this.schema)
  console.log(result);
}
  // validate = () => {
  //   let emailError = '';
  //   if (!this.state.email.includes("@") && !this.state.email.includes(".")){
  //     emailError="Toks email netinkamas"
  //   }
  //   if (emailError){
  //     this.setState({emailError});
  //     return false;
  //   }
  //   return true;
  // };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.validate();
    event.target.className += ' was-validated';
    //sitos dalies prireiks kai pats tevas gales keisti
    // if (this.state.password !== this.state.confirmPassword) {
    //   alert('Slaptažodžiai nesutampa!');
    // } else {
    //console.log(this.state);
    // if(this.state.error){
    //   alert ("egzistuoja toks el pastas")
    // }
    // else{

    const outputUser = {
      email: this.state.email,
      firstname: this.state.firstname,
      id: this.state.id,
      lastname: this.state.lastname,
      role: this.state.role,
      password: this.state.firstname,
      // confirmPassword: this.state.confirmPassword,
    };
    // const isValid = this.validate();
    // if (isValid) {
    // }
    axios
      .post(API + '/api/users', outputUser)
      .then((response) => {
        console.log(response);
        this.props.history.push('/admin/sekminga');
      })

      .catch((error) => {
        if (error.response.status === 405) {
          alert('Toks el.paštas jau egzistuoja!');
        }
        console.log(error);
        // this.setState({error});
      });
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
          // emailError={this.emailError}
          // confirmPassword={this.state.confirmPassword}
          // error={this.state.error}
          {...this.state}
        />
      </div>
    );
  }
}
