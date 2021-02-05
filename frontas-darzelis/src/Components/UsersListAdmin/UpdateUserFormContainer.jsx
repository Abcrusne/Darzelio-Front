import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LogoutPresentation from '../SysAdminLanding/LogoutPresentation';
import NavigationComponent from '../SysAdminLanding/NavigationComponent';

export default class UpdateUserFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
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
  componentDidMount() {
    console.log('component did mount');
    axios
      .get(`${API}/api/users/${this.props.match.params.id}`)
      .then((res) =>
        this.setState({
          id: res.data.id,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          email: res.data.email,
          role: res.data.role,
          password: res.data.password,
        })
      )
      .catch((err) => console.log(err));
  }
  resetPassword = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/api/users/${this.state.id}`, {
        id: this.state.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        role: this.state.role,
        password: this.state.firstname,
      })
      .then((response) => {
        console.log(response);
        alert(
          'Vartotojo slaptažodis atsatatytas į pirminį (toks kaip vardas dabar)'
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    event.preventDefault();

    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const { name, value } = event.target;
    let errors = this.state.errors;
    let letters = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/;
    switch (name) {
      case 'firstname':
        errors.firstname =
          !value.match(letters) || value.length < 2
            ? 'Vardas turi būti iš raidžių ir ilgesnis nei 1 raidė!'
            : '';
        break;
      case 'role':
        errors.role = !value || value.length === 0 ? 'Pasirinkite rolę!' : '';
        break;

      case 'email':
        errors.email = validEmailRegex.test(value)
          ? ''
          : 'El.paštas netinkamas!';
        break;
      case 'lastname':
        errors.lastname =
          !value.match(letters) || value.length < 2
            ? 'Pavardė turi būti iš raidžių ir ilgesnė nei 1 raidė!'
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
        .put(
          `${API}/api/users/${this.state.id}`,

          {
            id: this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            role: this.state.role,
            password: this.state.password,
          }
        )
        .then((response) => {
          console.log(response);
          this.props.history.push('/admin/vartotojai');
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
          console.log(error);
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
      <div>
        <NavigationComponent />

        <div className="col-lg-5 m-auto shadow p-3 mb-5 bg-white rounded">
          <LogoutPresentation />
          <div className="mb-4">
            <h3>Atnaujinti vartotojo duomenis</h3>
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
                value={this.state.firstname}
                // required
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
                value={this.state.lastname}
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
                value={this.state.email}
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
                value={this.state.role}
                // required
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
                Išsaugoti
              </button>

              <button
                type="submit"
                className="btn btn-warning ml-3"
                onClick={this.resetPassword}
              >
                Atstatyti slaptažodį į pirminį
              </button>
            </div>
            {/* {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'} */}
          </form>
        </div>
      </div>
    );
  }
}
