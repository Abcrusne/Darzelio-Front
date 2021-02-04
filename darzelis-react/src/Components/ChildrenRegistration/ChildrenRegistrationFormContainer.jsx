import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import '../../Style/style.css';

export default class ChildrenRegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstname: '',
      lastname: '',
      personalCode: '',
      birthdate: '',
      city: '',
      street: '',
      houseNumber: '',
      flatNumber: '',
      userId: '',

      errors: {
        firstname: '',
        lastname: '',
        personalCode: '',
        birthdate: '',
        city: '',
        street: '',
        houseNumber: '',
        flatNumber: '',
      },
    };
  }
  handleChange = (event) => {
    // event.preventDefault();
    console.log(event.target.checked);

    const { name, value } = event.target;
    let errors = this.state.errors;
    let letters = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/;
    let date = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    let validPersonalCode = /^[3|4]+[0-9]+$/;
    let numbers = /^[0-9]+$/;
    switch (name) {
      case 'firstname':
        errors.firstname =
          !value.match(letters) || value.length < 2 || value.length === 0
            ? 'Vardas turi būti iš raidžių ir ilgesnis nei 1 raidė! '
            : '';
        break;

      case 'lastname':
        errors.lastname =
          !value.match(letters) || value.length < 2 || value.length === 0
            ? 'Pavardė turi būti iš raidžių ir ilgesnė nei 1 raidė! '
            : '';
        break;

      case 'personalCode':
        errors.personalCode =
          !value.match(validPersonalCode) ||
          value.length < 11 ||
          value.length > 11 ||
          value.length === 0
            ? 'Asmens kodo formatas: 49001011111 arba 39001011111 '
            : '';
        break;
      case 'birthdate':
        errors.birthdate =
          !value.match(date) || value.length === 0
            ? 'Gimimo datos formatas: 2020-01-01 '
            : '';
        break;
      case 'street':
        errors.street = !value || value.length === 0 ? 'Įrašykite gatvę!' : '';
        break;
      case 'city':
        errors.city =
          !value || !value.match(letters) || value.length === 0
            ? 'Įrašykite miestą'
            : '';
        break;
      case 'houseNumber':
        errors.houseNumber =
          !value || value.length === 0 ? 'Įrašykite namo numerį' : '';
        break;

      case 'flatNumber':
        errors.flatNumber = !value.match(numbers)
          ? 'Įrašykite buto numerį, pvz: 2'
          : '';
        break;

      default:
        break;
    }
    if (event.target.type === 'checkbox') {
      // console.log(event.target.checked);
      this.setState({ [event.target.name]: event.target.checked });
    } else
      this.setState({ errors, [event.target.name]: event.target.value }, () => {
        console.log(errors);
      });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const childrenInput = {
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      birthdate: this.state.birthdate,
      personalCode: this.state.personalCode,
      city: this.state.city,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      flatNumber: this.state.flatNumber,
      userId: this.state.userId,
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
        .post(`${API}/api/${this.state.userId}/childrendetails`, childrenInput)
        .then((response) => {
          console.log(response);
          alert('Vaiko duomenų registracija sėkminga');
          this.props.history.push('/tevai/registracijadazeliui');
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
  handleAddAnotherChild = (event) => {
    event.preventDefault();

    const childrenInput = {
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      birthdate: this.state.birthdate,
      personalCode: this.state.personalCode,
      city: this.state.city,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      flatNumber: this.state.flatNumber,
      userId: this.state.userId,
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
        .post(`${API}/api/${this.state.userId}/childrendetails`, childrenInput)
        .then((response) => {
          console.log(response);
          alert('Vaiko duomenų registracija sėkminga');
          this.props.history.push('/tevai/vaikoregistracija');
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
        {/* <NavigationComponent /> */}
        {/* <LogoutPresentation /> */}
        <div className="col-lg-5 m-auto shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h3>Vaiko duomenų registracija</h3>
          </div>
          <form noValidate className="form-group ">
            <div className="mb-3">
              <label htmlFor="firstname" className="control-label">
                Vaiko Vardas*:
              </label>
              <input
                type="text"
                placeholder="Vaiko Vardas"
                className="form-control"
                name="firstname"
                onChange={this.handleChange}
                noValidate
              />
              {errors.firstname.length > 0 && (
                <span className="error">{errors.firstname}</span>
              )}
            </div>
            <div className="mb-3 ">
              <label htmlFor="lastname" className="control-label">
                Vaiko Pavardė*:
              </label>
              <input
                type="text"
                placeholder="Vaiko Pavardė"
                className="form-control"
                name="lastname"
                onChange={this.handleChange}
                noValidate
              />
              {errors.lastname.length > 0 && (
                <span className="error">{errors.lastname}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="birthdate" className="control-label">
                Vaiko Gimimo Data*:
              </label>
              <input
                // type="date"
                type="text"
                placeholder="MMMM-MM-DD"
                className="form-control"
                name="birthdate"
                onChange={this.handleChange}
                noValidate
              />
              {errors.birthdate.length > 0 && (
                <span className="error">{errors.birthdate}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="personalCode" className="control-label">
                Vaiko Asmens Kodas*:
              </label>
              <input
                type="text"
                placeholder="Asmens kodas"
                className="form-control"
                name="personalCode"
                onChange={this.handleChange}
                noValidate
              />
              {errors.personalCode.length > 0 && (
                <span className="error">{errors.personalCode}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="street" className="control-label">
                Gatvė*:
              </label>
              <input
                type="text"
                placeholder="Gatvė"
                className="form-control"
                name="street"
                onChange={this.handleChange}
                noValidate
              />
              {errors.street.length > 0 && (
                <span className="error">{errors.street}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="control-label">
                Miestas*:
              </label>
              <input
                type="text"
                placeholder="Miestas"
                className="form-control"
                name="city"
                onChange={this.handleChange}
                noValidate
              />
              {errors.city.length > 0 && (
                <span className="error">{errors.city}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="houseNumber" className="control-label">
                Namo Numeris*:
              </label>
              <input
                type="text"
                placeholder="Namo numeris"
                className="form-control"
                name="houseNumber"
                onChange={this.handleChange}
                noValidate
              />
              {errors.houseNumber.length > 0 && (
                <span className="error">{errors.houseNumber}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="flatNumber" className="control-label">
                Butas:
              </label>
              <input
                type="number"
                min="0"
                placeholder="Butas"
                className="form-control"
                name="flatNumber"
                onChange={this.handleChange}
                noValidate
              />
              {errors.flatNumber.length > 0 && (
                <span className="error">{errors.flatNumber}</span>
              )}
            </div>

            <div> * - privalomi laukai</div>
            <div>
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
                onSubmit={this.handleAddAnotherChild}
              >
                Išsaugoti ir Pridėti kitą vaiką
              </button>

              <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
                onSubmit={this.handleSubmit}
              >
                Išsaugoti ir Tęsti
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
