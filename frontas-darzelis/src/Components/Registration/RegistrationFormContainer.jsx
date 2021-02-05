import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import '../../Style/style.css';
import LogoutPresentation from '../SysAdminLanding/LogoutPresentation';
import NavigationComponent from '../Navigation/SysAdminNavigationComponent';

export default class RegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      role: '',
      password: '',
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        role: '',
      },
    };
  }
  // componentDidCatch(error, errorInfo){
  //   logErrorToMyService(error,errorInfo);
  // }
  handleChange = (event) => {
    event.preventDefault();

    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );
    const { name, value } = event.target;
    const errors = this.state.errors;
    const letters = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/;

    switch (name) {
      case 'firstname':
        errors.firstname =
          !value.match(letters) || value.length < 2 || value.length === 0
            ? 'Vardas turi būti iš raidžių ir ilgesnis nei 1 raidė! '
            : '';
        break;
      case 'role':
        errors.role = !value || value.length === 0 ? 'Pasirinkite rolę!' : '';
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
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // event.target.className += ' was-validated';

    const outputUser = {
      email: this.state.email,
      firstname: this.state.firstname,
      id: this.state.id,
      lastname: this.state.lastname,
      role: this.state.role,
      password: this.state.firstname,
      // confirmlastname: this.state.confirmlastname,
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
        .post(API + '/api/users', outputUser)
        .then((response) => {
          console.log(response);
          this.props.history.push('/admin/sekminga');
        })

        .catch((error) => {
          if (error.response.data.message === 'Email already taken') {
            alert('Toks el.paštas jau egzistuoja! ');
          } else if (error.response.data.message === 'Invalid field entry') {
            alert('Užpildykite visus laukus!');
          } else if (error.response.status === 400) {
            alert(
              'Registracija nesėkminga! Pasitikrinkite ar pažymėjote bei užpildėte laukus teisingai!'
            );
          }
          // error.message
          //Error.response.data.message
          //error
          console.log(error);
          // this.setState({error});
        });
    } else {
      console.error('Invalid Form');
      alert(
        'Registracija nesėkminga! Pasitikrinkite ar pažymėjote bei užpildėte laukus teisingai. '
      );
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container mt-5">
        <NavigationComponent />
        <LogoutPresentation />
        <div className="col-lg-5 m-auto shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h3>Užregistruoti naują vartotoją</h3>
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
              {/* <div className="invalid-feedback">Įrašykite vardą.</div>
          <div className="valid-feedback"></div> */}
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
            <div className="mb-3">
              <label htmlFor="role" className="control-label">
                Parinkite rolę*:
              </label>
              <select
                type="role"
                className="form-control"
                name="role"
                onChange={this.handleChange}
                noValidate
                //required
              >
                <option value=""></option>
                <option value="PARENT">Tėvas/globėjas</option>
                <option value="EDU">Švietimo specialistas</option>
              </select>
              {errors.role.length > 0 && (
                <span className="error">{errors.role}</span>
              )}
              {/* <span className="invalid-feedback error">Pasirinkite rolę.</span> */}
            </div>
            <div> * - privalomi laukai</div>
            <div>
              <button type="submit" className="btn btn-success">
                Registruoti
              </button>
            </div>
            {/* {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'} */}
          </form>
        </div>
      </div>
    );
  }
}
