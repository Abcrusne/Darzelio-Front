import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';

export default class RegistrationToSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      // role: 'PARENT',
      // markedForDeletion: false,
      // password: '',

      //   confirmPassword: '',

      errors: {
        firstname: '',
        lastname: '',
        email: '',
        // confirmPassword: '',
        // password: '',
      },
    };
  }
  handleChange = (event) => {
    event.preventDefault();

    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );
    const { name, value } = event.target;
    const errors = this.state.errors;
    const letters = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ -]+$/;
    //min 1 lowercase letter, min 1 uppercase letter,min 1 number, length min=8
    //const newPasswordValidation = /^(?=.*[a-ząčęėįšųūž])(?=.*[A-ZĄČĘĖĮŠŲŪŽ])(?=.*\d)[a-ząčęėįšųūžA-ZĄČĘĖĮŠŲŪŽ\d]{8,}$/;

    switch (name) {
      case 'firstname':
        errors.firstname =
          !value.match(letters) || value.length < 2 || value.length === 0
            ? 'Vardas turi būti iš raidžių ir ilgesnis nei 1 raidė! '
            : '';
        break;

      case 'email':
        errors.email =
          validEmailRegex.test(value) || value.length === 0
            ? ''
            : 'El.paštas netinkamas! Formato pvz.: vardas@mail.com';
        break;
      case 'lastname':
        errors.lastname =
          !value.match(letters) || value.length < 2 || value.length === 0
            ? 'Pavardė turi būti iš raidžių ir ilgesnė nei 1 raidė! '
            : '';
        break;

      //   case 'password':
      //     errors.password =
      //       !value.match(newPasswordValidation) || value.length < 8
      //         ? 'Naują slaptažodį turi sudaryti bent 1 mažoji raidė, bent 1 didžioji raidė, bent 1 skaičius, slaptažodžio ilgis ne trumpesnis nei 8 simboliai'
      //         : '';
      //     break;
      //   case 'confirmPassword':
      //     errors.confirmPassword =
      //       value !== this.state.password || value.length < 8
      //         ? 'Slaptažodiai nesutampa'
      //         : '';
      //     break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      // console.log(errors);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // event.target.className += ' was-validated';

    const outputUser = {
      email: this.state.email,
      firstname: this.state.firstname,
      // id: this.state.id,
      lastname: this.state.lastname,
      // role: this.state.role,
      // password: this.state.firstname,
      //   password: this.state.confirmPassword,
      //markedForDeletion: this.state.markedForDeletion,
    };
    const validateForm = (errors) => {
      let valid = true;
      Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
      );
      return valid;
    };

    if (validateForm(this.state.errors)) {
      axios
        .post(API + '/api/users/register', outputUser)
        .then((response) => {
          alert(
            'Registracija sėkminga! Prisijungimo duomenys išsiųsti el.paštu'
          );
          this.props.history.push('/login');
        })

        .catch((error) => {
          if (error.response.data.message === 'Item already exists') {
            alert('Toks el.paštas jau egzistuoja! ');
          } else if (error.response.data.message === 'Invalid field entry') {
            alert('Užpildykite visus laukus!');
          } else if (error.response.status === 400) {
            alert(
              'Registracija nesėkminga! Pasitikrinkite ar pažymėjote bei užpildėte laukus teisingai!'
            );
          }

          console.log(error);
        });
    } else {
      //console.error('Invalid Form');
      alert(
        'Registracija nesėkminga! Pasitikrinkite ar pažymėjote bei užpildėte laukus teisingai. '
      );
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container mt-5">
        <div className="col-lg-5 m-auto shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h3>Registracija į vaikų darželių informacinę sistemą</h3>
          </div>
          <form onSubmit={this.handleSubmit} noValidate className="form-group ">
            <div className="mb-3">
              <label htmlFor="firstname" className="control-label">
                Vartotojo vardas*:
              </label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                onChange={this.handleChange}
                noValidate
                //required
              />
              {errors.firstname.length > 0 && (
                <span className="error">{errors.firstname}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="control-label">
                Vartotojo pavardė*:
              </label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                onChange={this.handleChange}
                noValidate
                //required
              />
              {errors.lastname.length > 0 && (
                <span className="error">{errors.lastname}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="control-label">
                Vartotojo el.paštas*:
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.handleChange}
                noValidate
                //required
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            {/* <div className="mb-3">
              <label htmlFor="password" className="control-label">
                Slaptažodis*:
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.handleChange}
                noValidate
                value={this.state.password}
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="control-label">
                Patvirtinkite naują slaptažodį*:
              </label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onChange={this.handleChange}
                noValidate
                value={this.state.confirmPassword}
              />
              {errors.confirmPassword.length > 0 && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div> */}
            <div> * - privalomi laukai</div>
            <div>
              <button type="submit" className="btn btn-success">
                Registruotis
              </button>
            </div>
            {/* {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'} */}
          </form>
        </div>
      </div>
    );
  }
}
