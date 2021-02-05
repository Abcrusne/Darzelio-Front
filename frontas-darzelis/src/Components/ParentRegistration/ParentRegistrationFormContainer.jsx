import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import '../../Style/style.css';
import LogoutPresentation from '../SysAdminLanding/LogoutPresentation';

export default class ParentRegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
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
      isAdopted: false,
      studying: false,
      studyingInstitution: '',
      hasDisability: false,
      declaredResidenceSameAsLiving: false,
      declaredCity: '',
      declaredStreet: '',
      declaredHouseNumber: '',
      declaredFlatNumber: '',
      // userId: '',

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
        studyingInstitution: '',
      },
    };
  }
  // componentDidMount() {
  //   console.log('component did mount');
  //   axios
  //     .get(`${API}/api/users/${this.props.match.params.userId}/parentsdetails`)
  //     .then((res) => {
  //       this.setState({
  //         // id: res.data.id,
  //         email: res.data.email,
  //         firstname: res.data.firstname,
  //         lastname: res.data.lastname,
  //         phone: res.data.phone,
  //         personalCode: res.data.personalCode,
  //         city: res.data.city,
  //         street: res.data.street,
  //         houseNumber: res.data.houseNumber,
  //         flatNumber: res.data.flatNumber,
  //         numberOfKids: res.data.numberOfKids,
  //         studying: res.data.studying,
  //         studyingInstitution: res.data.studyingInstitution,
  //         hasDisability: res.data.hasDisability,
  //         declaredResidenceSameAsLiving: res.data.declaredResidenceSameAsLiving,
  //         declaredCity: res.data.declaredCity,
  //         declaredStreet: res.data.declaredStreet,
  //         declaredHouseNumber: res.data.declaredHouseNumber,
  //         declaredFlatNumber: res.data.declaredFlatNumber,
  //         userId: res.data.userId,
  //       });
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  handleChange = (event) => {
    // event.preventDefault();
    console.log(event.target.checked);

    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );
    const { name, value } = event.target;
    let errors = this.state.errors;
    let letters = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/;
    let validPhone = /^[+3706]+[0-9]+$/;
    let validPersonalCode = /^[3|4]+[0-9]+$/;
    let numbers = /^[0-9]+$/;
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
      case 'phone':
        errors.phone =
          !value.match(validPhone) ||
          value.length < 12 ||
          value.length > 12 ||
          value.length === 0
            ? 'Telefono numerio formatas +37061234567 '
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
      case 'numberOfKids':
        errors.numberOfKids =
          !value.match(numbers) || value.length < 0
            ? 'Įrašykite vaikų skaičių'
            : '';
        break;
      case 'studyingInstitution':
        errors.studyingInstitution =
          !value || value.length === 0 ? 'Įrašykite Mokymosi instituciją!' : '';
        break;
      case 'declaredStreet':
        errors.declaredStreet = !value || value.length === 0 ? 'Įrašykite gatvę!' : '';
        break;
      case 'declaredCity':
        errors.declaredCity =
          !value || !value.match(letters) || value.length === 0
            ? 'Įrašykite miestą'
            : '';
        break;
      case 'declaredHouseNumber':
        errors.declaredHouseNumber=
          !value || value.length === 0 ? 'Įrašykite namo numerį' : '';
        break;

      case 'declaredFlatNumber':
        errors.declaredFlatNumber = !value.match(numbers)
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

    const outputUser = {
      id: this.state.id,
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      personalCode: this.state.personalCode,
      city: this.state.city,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      flatNumber: this.state.flatNumber,
      numberOfKids: this.state.numberOfKids,
      isAdopted: this.state.isAdopted,
      studying: this.state.studying,
      studyingInstitution: this.state.studyingInstitution,
      hasDisability: this.state.hasDisability,
      declaredResidenceSameAsLiving: this.state.declaredResidenceSameAsLiving,
      declaredCity: this.state.declaredCity,
      declaredStreet: this.state.declaredStreet,
      declaredHouseNumber: this.state.declaredHouseNumber,
      declaredFlatNumber: this.state.declaredFlatNumber,
      // userId: this.state.userId,
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
        .post(
          `${API}/api/users/${this.state.id}/parentsdetails`,
          outputUser
        )
        .then((response) => {
          console.log(response);
          alert('Tėvo/Globėjo registracija sėkminga');
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
  // handleAddAnotherParent = (event) => {
  //   event.preventDefault();
  //   const outputUser = {
  //     // id: this.state.id,
  //     email: this.state.email,
  //     firstname: this.state.firstname,
  //     lastname: this.state.lastname,
  //     phone: this.state.phone,
  //     personalCode: this.state.personalCode,
  //     city: this.state.city,
  //     street: this.state.street,
  //     houseNumber: this.state.houseNumber,
  //     flatNumber: this.state.flatNumber,
  //     numberOfKids: this.state.numberOfKids,
  //     studying: this.state.studying,
  //     studyingInstitution: this.state.studyingInstitution,
  //     hasDisability: this.state.hasDisability,
  //     declaredResidenceSameAsLiving: this.state.declaredResidenceSameAsLiving,
  //     declaredCity: this.state.declaredCity,
  //     declaredStreet: this.state.declaredStreet,
  //     declaredHouseNumber: this.state.declaredHouseNumber,
  //     declaredFlatNumber: this.state.declaredFlatNumber,
  //     userId: this.state.userId,
  //   };
  //   const validateForm = (errors) => {
  //     let valid = true;
  //     Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  //     return valid;
  //   };

  //   if (validateForm(this.state.errors)) {
  //     axios
  //       .post(`${API}/api/users/${this.state.userId}/parentsdetails`, outputUser)
  //       .then((response) => {
  //         console.log(response);
  //         alert('Tėvo/Globėjo registracija sėkminga');
  //         this.props.history.push('/tevai/registracija');
  //       })

  //       .catch((error) => {
  //         if (error.response.data.message === 'Email already taken') {
  //           alert('Toks el.paštas jau egzistuoja! ');
  //         } else if (error.response.data.message === 'Invalid field entry') {
  //           alert('Užpildykite visus laukus!');
  //         } else if (error.response.status === 400) {
  //           alert(
  //             'Registracija nesėkminga! Pasitikrinkite ar pažymėjote bei užpildėte laukus teisingai!'
  //           );
  //         }
  //         console.log(error);
  //       });
  //   } else {
  //     console.error('Invalid Form');
  //     alert(
  //       'Registracija nesėkminga! Pasitikrinkite ar pažymėjote bei užpildėte laukus teisingai. '
  //     );
  //   }
  // };

  render() {
    console.log('this.state length: ' + this.state.length);
    const { errors } = this.state;
    return (
      <div>
        {/* <NavigationComponent /> */}
        <LogoutPresentation />
        <div className="col-lg-5 m-auto shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h3>Tėvo/Globėjo registracija</h3>
          </div>
          <form noValidate className="form-group ">
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
              />
              {errors.firstname.length > 0 && (
                <span className="error">{errors.firstname}</span>
              )}
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
              />
              {errors.phone.length > 0 && (
                <span className="error">{errors.phone}</span>
              )}
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
            <div className="mb-3">
              <label htmlFor="numberOfKids" className="control-label">
                Kiek turite vaikų?*:
              </label>
              <input
                type="number"
                min="0"
                placeholder="Skaičius"
                className="form-control"
                name="numberOfKids"
                onChange={this.handleChange}
                noValidate
              />
              {errors.numberOfKids.length > 0 && (
                <span className="error">{errors.numberOfKids}</span>
              )}
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="isAdopted"
                checked={this.state.isAdopted}
                onChange={this.handleChange}
              />
              <label htmlFor="isAdopted" className="form-check-label">
                Esu šio vaiko globėjas
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="studying"
                checked={this.state.studying}
                onChange={this.handleChange}
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
                />
                {errors.studyingInstitution.length > 0 && (
                  <span className="error">{errors.studyingInstitution}</span>
                )}
              </div>
            ) : null}
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="hasDisability"
                id="hasDisability"
                checked={this.state.hasDisability}
                onChange={this.handleChange}
                noValidate
              />
              <label htmlFor="hasDisability" className="form-check-label">
                Turiu mažesnį nei 40% darbingumo lygį
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
              />
              <label
                htmlFor="declaredResidenceSameAsLiving"
                className="form-check-label"
              >
                Jei deklaruota gyvenamoji vieta sutampa, pažymėkite.
              </label>
            </div>
            {this.state.declaredResidenceSameAsLiving ? null : (
              <div>
                <div className="mb-3">
                  <label htmlFor="declaredStreet" className="control-label">
                    Deklaruota Gatvė*:
                  </label>
                  <input
                    type="text"
                    placeholder="Deklaruota Gatvė"
                    className="form-control"
                    name="declaredStreet"
                    onChange={this.handleChange}
                    noValidate
                    //required
                  />
                  {errors.declaredStreet.length > 0 && (
                    <span className="error">{errors.declaredStreet}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="declaredCity" className="control-label">
                    Deklaruotas Miestas*:
                  </label>
                  <input
                    type="text"
                    placeholder="Deklaruotas Miestas"
                    className="form-control"
                    name="declaredCity"
                    onChange={this.handleChange}
                    noValidate
                    //required
                  />
                  {errors.declaredCity.length > 0 && (
                    <span className="error">{errors.declaredCity}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="declaredHouseNumber"
                    className="control-label"
                  >
                    Deklaruotas Namo Numeris*:
                  </label>
                  <input
                    type="text"
                    placeholder="Deklaruotas Namo Numeris"
                    className="form-control"
                    name="declaredHouseNumber"
                    onChange={this.handleChange}
                    noValidate
                    //required
                  />
                  {errors.declaredHouseNumber.length > 0 && (
                    <span className="error">{errors.declaredHouseNumber}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="declaredFlatNumber" className="control-label">
                    Deklaruotas Butas:
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Deklaruotas Butas"
                    className="form-control"
                    name="declaredFlatNumber"
                    onChange={this.handleChange}
                    noValidate
                    //required
                  />
                  {errors.declaredFlatNumber.length > 0 && (
                    <span className="error">{errors.declaredFlatNumber}</span>
                  )}
                </div>
              </div>
            )}
            <div> * - privalomi laukai</div>
            <div>
              {/* jei sitas nesuveiks, tai push /tevai/registracija2 ir 
              perkopijuot sita page bet per prideti kita teva */}
              {/* {this.state.length >= 1 ? null : (
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block"
                  onSubmit={this.handleAddAnotherParent}
                >
                  Pridėti kitą tėvą
                </button>
              )} */}
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
                onSubmit={this.handleSubmit}
              >
                Tęsti
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
