import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import '../../Style/style.css';
import LogoutPresentation from '../SysAdminLanding/LogoutPresentation';
import NavigationComponent from '../SysAdminLanding/NavigationComponent';

export default class ParentRegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      personalCode: '',
      city: '',
      street: '',
      houseNumber: '',
      flatNumber: '',
      numberOfKids: '',
      studying: false,
      studyingInstitution: '',
      hasDisability: false,
      declaredResidenceSameAsLiving: false,
      declaredCity: '',
      declaredStreet: '',
      declaredHouseNumber: '',
      declaredFlatNumber: '',

      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        personalCode: '',
        city: '',
        street: '',
        houseNumber: '',
        flatNumber: '',
        numberOfKids: '',
        declaredCity: '',
        declaredStreet: '',
        declaredHouseNumber: '',
        declaredFlatNumber: '',
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();

    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const { name, value } = event.target;
    let errors = this.state.errors;
    let letters = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/;
    // let validPhone = /^[+3706]+[0-9]{7,15}+$/;
    // let validPersonalCode = /^[3|4]+[0-9]{10,11}+$/;
    switch (name) {
      case 'firstname':
        errors.firstname =
          !value.match(letters) || value.length < 2 || value.length === 0
            ? 'Vardas turi būti iš raidžių ir ilgesnis nei 1 raidė! '
            : '';
        break;
      //   case 'role':
      //     errors.role = !value || value.length === 0 ? 'Pasirinkite rolę!' : '';
      //     break;

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
    if (event.target.type === 'checkbox')
      this.setState({ [event.target.name]: event.target.checked });
    else
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
      phone: this.state.phone,
      personalCode: this.state.personalCode,
      city: this.state.city,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      flatNumber: this.state.flatNumber,
      numberOfKids: this.state.numberOfKids,
      studying: this.state.studying,
      studyingInstitution: this.state.studyingInstitution,
      hasDisability: this.state.hasDisability,
      declaredResidenceSameAsLiving: this.state.declaredResidenceSameAsLiving,
      declaredCity: this.state.declaredCity,
      declaredStreet: this.state.declaredStreet,
      declaredHouseNumber: this.state.declaredHouseNumber,
      declaredFlatNumber: this.state.declaredFlatNumber,
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
        .post(API + '/api/parents', outputUser)
        .then((response) => {
          console.log(response);
          this.props.history.push('/tevai/sekminga');
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
        <LogoutPresentation />
        <div className="col-lg-5 m-auto shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h3>Tėvo/Globėjo registracija</h3>
          </div>
          <form onSubmit={this.handleSubmit} noValidate className="form-group ">
   
            <div className="mb-3">
              <label htmlFor="firstname" className="control-label">
                Vardas*:
              </label>
              <input
                type="text"
                placeholder="Vardas"
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
            <div className="mb-3 ">
              <label htmlFor="lastname" className="control-label">
                Pavardė*:
              </label>
              <input
                type="text"
                placeholder="Pavardė"
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
                El.paštas*:
              </label>
              <input
                type="email"
                placeholder="El.paštas"
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
              <label htmlFor="phone" className="control-label">
                Tel.nr*:
              </label>
              <input
                type="tel"
                placeholder="Tel.nr"
                className="form-control"
                name="phone"
                onChange={this.handleChange}
                noValidate
                //required
              />
              {/* {errors.phone.length > 0 && (
                <span className="error">{errors.phone}</span>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="personalCode" className="control-label">
                Asmens Kodas*:
              </label>
              <input
                type="text"
                placeholder="Asmens kodas"
                className="form-control"
                name="personalCode"
                onChange={this.handleChange}
                noValidate
                //required
              />
              {/* {errors.personalCode.length > 0 && (
                <span className="error">{errors.personalCode}</span>
              )} */}
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
                //required
              />
              {/* {errors.street.length > 0 && (
                <span className="error">{errors.street}</span>
              )} */}
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
                //required
              />
              {/* {errors.city.length > 0 && (
                <span className="error">{errors.city}</span>
              )} */}
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
                //required
              />
              {/* {errors.houseNumber.length > 0 && (
                <span className="error">{errors.houseNumber}</span>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="flatNumber" className="control-label">
                Butas:
              </label>
              <input
                type="number"
                placeholder="Butas"
                className="form-control"
                name="flatNumber"
                onChange={this.handleChange}
                noValidate
                //required
              />
              {/* {errors.flatNumber.length > 0 && (
                <span className="error">{errors.flatNumber}</span>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="numberofKids" className="control-label">
                Kiek turite vaikų?*:
              </label>
              <input
                type="number"
                placeholder="Skaičius"
                className="form-control"
                name="numberofKids"
                onChange={this.handleChange}
                noValidate
                //required
              />
              {/* {errors.numberofKids.length > 0 && (
                <span className="error">{errors.numberofKids}</span>
              )} */}
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={this.state.studying}
                name="studying"
                // id="studying"
                onChange={this.handleChange}
                noValidate
                //required
              />
              <label htmlFor="studying" className="form-check-label">
                Mokausi bendrojo lavinimo mokykloje
              </label>
            </div>
            {this.state.studying ? (
              <div className="mb-3">
                <label htmlFor="studyingInstitution" className="control-label">
                  Mokymosi įstaigos pavadinimas*:
                </label>
                <input
                  type="text"
                  placeholder="Mokymosi įstaiga"
                  className="form-control"
                  name="studyingInstitution"
                  onChange={this.handleChange}
                  noValidate
                  //required
                />
              
              </div>
            ) : null}
<div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={this.state.hasDisability}
                name="hasDisability"
                id="hasDisability"
                onChange={this.handleChange}
                noValidate
                //required
              />
              <label htmlFor="hasDisability" className="form-check-label">
                Turiu mažesnį nei 40% darbingumo lygį?
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={this.state.declaredResidenceSameAsLiving}
                name="declaredResidenceSameAsLiving"
                id="declaredResidenceSameAsLiving"
                onChange={this.handleChange}
                noValidate
                //required
              />
              <label htmlFor="declaredResidenceSameAsLiving" className="form-check-label">
                Jei deklaruota gyvenamoji vieta sutampa, pažymėkite.
              </label>
            </div>
{this.state.declaredResidenceSameAsLiving ? null : <div> 
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
                //required
              />
              {/* {errors.street.length > 0 && (
                <span className="error">{errors.street}</span>
              )} */}
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
                //required
              />
              {/* {errors.city.length > 0 && (
                <span className="error">{errors.city}</span>
              )} */}
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
                //required
              />
              {/* {errors.houseNumber.length > 0 && (
                <span className="error">{errors.houseNumber}</span>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="flatNumber" className="control-label">
                Butas:
              </label>
              <input
                type="number"
                placeholder="Butas"
                className="form-control"
                name="flatNumber"
                onChange={this.handleChange}
                noValidate
                //required
              />
              {/* {errors.flatNumber.length > 0 && (
                <span className="error">{errors.flatNumber}</span>
              )} */}
            </div>
    </div>}

            {/* <div className="mb-3">
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
            </div> */}
            <div> * - privalomi laukai</div>
            <div>
            <button type="submit" className="btn btn-success btn-lg btn-block">
                Pridėti kitą tėvą
              </button>
              <button type="submit" className="btn btn-success btn-lg btn-block">
                Tęsti
              </button>
            </div>
            {/* {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'} */}
          </form>
        </div>
      </div>
    );
  }
}
