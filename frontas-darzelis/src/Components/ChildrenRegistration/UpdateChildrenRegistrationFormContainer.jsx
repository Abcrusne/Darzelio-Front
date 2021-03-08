import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import ModalComponentChildren from '../Modal/ModalComponentChildren';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../Style/style.css';
//import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import lt from 'date-fns/locale/lt';

registerLocale('lt', lt);

axios.defaults.withCredentials = true; // leidžia dalintis cookies

export default class UpdateChildrenRegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: '',

      //parent id ar jau egzistuoja toks tevas
      //user'io kuris prisijunges id
      userId: '',
      //vaiko id
      id: '',
      firstname: '',
      lastname: '',
      personalCode: 0,

      city: '',
      street: '',
      houseNumber: '',
      flatNumber: 0,

      //second parent id
      secondParentId: '',
      secondParent: "",
      secondParentFirstname: '',
      secondParentLastname: '',
      secondParentEmail: '',
      secondParentPhone: '',
      secondParentPersonalCode: 0,
      secondParentCity: '',
      secondParentStreet: '',

      secondParentHouseNumber: '',
      secondParentFlatNumber: 0,
      secondParentNumberOfKids: 0,
      secondParentStudying: "",
      secondParentStudyingInstitution: '',
      secondParentHasDisability: "",

      secondParentDeclaredResidenceSameAsLiving: "",
      secondParentDeclaredCity: '',
      secondParentDeclaredStreet: '',
      secondParentDeclaredHouseNumber: '',
      secondParentDeclaredFlatNumber: 0,
      adopted: false,

      errors: {
        firstname: '',
        lastname: '',
        personalCode: '',
        birthdate: '',
        city: '',
        street: '',
        houseNumber: '',
        flatNumber: '',

        secondParentFirstname: '',
        secondParentLastname: '',
        secondParentPersonalCode: '',
        secondParentEmail: '',
        secondParentPhone: '',
        secondParentCity: '',
        secondParentStreet: '',
        secondParentHouseNumber: '',
        secondParentFlatNumber: '',
        secondParentNumberOfKids: '',
        secondParentStudyingInstitution: '',
        secondParentDeclaredCity: '',
        secondParentDeclaredStreet: '',
        secondParentDeclaredHouseNumber: '',
        secondParentDeclaredFlatNumber: '',
      },
    };
  }
  componentDidMount() {
    console.log('component did mount');
    axios
      .get(`${API}/api/users/loggeduserid`)
      .then((res) => {
        this.setState({
          userId: res.data,
        });
        console.log('user id: ' + this.state.userId);

        return axios.get(
          `${API}/api/users/${this.state.userId}/parentdetails/children/${this.props.match.params.id}`
        );
      })
      .then((res) => {
        this.setState({
          id: res.data.id,
          birthdate: res.data.birthdate,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          personalCode: res.data.personalCode,
          city: res.data.city,
          street: res.data.street,
          houseNumber: res.data.houseNumber,
          flatNumber: res.data.flatNumber,
          secondParent: res.data.secondParent,
          secondParentId: res.data.secondParentId,
          secondParentFirstname: res.data.secondParentFirstname,
          secondParentLastname: res.data.secondParentLastname,
          secondParentEmail: res.data.secondParentEmail,
          secondParentPhone: res.data.secondParentPhone,
          secondParentPersonalCode: res.data.secondParentPersonalCode,
          secondParentCity: res.data.secondParentCity,
          secondParentStreet: res.data.secondParentStreet,
          secondParentHouseNumber: res.data.secondParentHouseNumber,
          secondParentFlatNumber: res.data.secondParentFlatNumber,
          secondParentNumberOfKids: res.data.secondParentNumberOfKids,
          secondParentStudying: res.data.secondParentStudying,
          secondParentStudyingInstitution:
            res.data.secondParentStudyingInstitution,
          secondParentHasDisability: res.data.secondParentHasDisability,
          secondParentDeclaredResidenceSameAsLiving:
            res.data.secondParentDeclaredResidenceSameAsLiving,
          secondParentDeclaredCity: res.data.secondParentDeclaredCity,
          secondParentDeclaredStreet: res.data.secondParentDeclaredStreet,
          secondParentDeclaredHouseNumber:
            res.data.secondParentDeclaredHouseNumber,
          secondParentDeclaredFlatNumber:
            res.data.secondParentDeclaredFlatNumber,
          adopted: res.data.adopted,
        });
        console.log('vaiko id: ' + this.state.id);
      })
      .catch((err) => console.log(err.data));
  }

  deleteChild = (event) => {
    //event.preventDefault();
    axios
      .delete(
        `${API}/api/users/${this.state.userId}/parentdetails/children/${this.state.id}`
      )
      .then(() => {
        alert('Vaikas buvo ištrintas');
        this.props.history.push('/tevai/vaikai');
      })
      .catch((err) => console.log(err.data));
    console.log('deleteChildren');
  };

  handleChangeDate = (date) => {
    //this.dd = moment(date).format("YYYY-MM-DD");
    //  date = moment(date).format("YYYY-MM-DD");
    this.setState({
      birthdate: date,
    });
  };
  handleChange = (event) => {
    // event.preventDefault();
    //console.log(event.target.checked);

    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );

    const { name, value } = event.target;
    let errors = this.state.errors;
    let letters = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/;
    //let lettersAndNumber = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ 0-9 ,/./-]+$/;
    let houseNumberValidation = /^[1-9][a-zA-Z 0-9 ]*$/;
    let streetValidation = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ][ a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ0-9 ,.\- ]*$/;
    let date = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    let validPersonalCode = /^[5|6]+[0-9]+$/;
    let validParentPersonalCode = /^[3|4|5|6]+[0-9]+$/;
    let validPhone = /^[+][3][7][0][6|5]+[0-9]+$/;
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
            ? 'Vaiko asmens kodo formatas: 59001011111 arba 69001011111 '
            : '';
        break;
      case 'birthdate':
        errors.birthdate =
          !value.match(date) || value.length === 0
            ? 'Gimimo datos formatas: 2020-01-01 '
            : '';
        break;
      case 'street':
        errors.street =
          !value || !value.match(streetValidation) || value.length === 0
            ? 'Įrašykite gatvę!'
            : '';
        break;
      case 'city':
        errors.city =
          !value || !value.match(letters) || value.length === 0
            ? 'Įrašykite miestą'
            : '';
        break;
      case 'houseNumber':
        errors.houseNumber =
          !value || !value.match(houseNumberValidation) || value.length === 0
            ? 'Įrašykite namo numerį, pvz.: 1A'
            : '';
        break;

      // case 'flatNumber':
      //   errors.flatNumber = !value.match(numbers)
      //     ? 'Įrašykite buto numerį, pvz: 2'
      //     : '';
      //   break;
      case 'secondParentFirstname':
        errors.secondParentFirstname =
          !value.match(letters) || value.length < 2 || value.length === 0
            ? 'Vardas turi būti iš raidžių ir ilgesnis nei 1 raidė! '
            : '';
        break;

      case 'secondParentLastname':
        errors.secondParentLastname =
          !value.match(letters) || value.length < 2 || value.length === 0
            ? 'Pavardė turi būti iš raidžių ir ilgesnė nei 1 raidė! '
            : '';
        break;

      case 'secondParentPersonalCode':
        errors.secondParentPersonalCode =
          !value.match(validParentPersonalCode) ||
          value.length < 11 ||
          value.length > 11 ||
          value.length === 0
            ? 'Asmens kodo formatas: 39001011111, 49001011111, 59001011111 arba 69001011111  '
            : '';
        break;

      case 'secondParentStreet':
        errors.secondParentStreet =
          !value || !value.match(streetValidation) || value.length === 0
            ? 'Įrašykite gatvę!'
            : '';
        break;
      case 'secondParentCity':
        errors.secondParentCity =
          !value || !value.match(letters) || value.length === 0
            ? 'Įrašykite miestą'
            : '';
        break;
      case 'secondParentHouseNumber':
        errors.secondParentHouseNumber =
          !value || !value.match(houseNumberValidation) || value.length === 0
            ? 'Įrašykite namo numerį, pvz.: 1A'
            : '';
        break;

      // case 'secondParentFlatNumber':
      //   errors.secondParentFlatNumber = !value.match(numbers)
      //     ? 'Įrašykite buto numerį, pvz: 2'
      //     : '';
      //   break;
      case 'secondParentEmail':
        errors.secondParentEmail =
          validEmailRegex.test(value) || value.length === 0
            ? ''
            : 'El.paštas netinkamas! Formato pvz.: vardas@mail.com';
        break;
      case 'secondParentPhone':
        errors.secondParentPhone =
          !value.match(validPhone) ||
          value.length < 12 ||
          value.length > 12 ||
          value.length === 0
            ? 'Telefono numerio formatas +37061234567  arba +37051234567'
            : '';
        break;
      case 'secondParentNumberOfKids':
        errors.secondParentNumberOfKids =
          !value.match(numbers) || value.length < 0
            ? 'Įrašykite vaikų skaičių'
            : '';
        break;
      default:
        break;
    }
    if (event.target.type === 'checkbox') {
       console.log(event.target.checked);
      this.setState({ [event.target.name]: event.target.checked });
    } else
      this.setState({ errors, [event.target.name]: event.target.value }, () => {
        // console.log(errors);
      });
    console.log(this.state);
  };
  handleSubmit = (event) => {
    event.preventDefault();

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
          `${API}/api/users/${this.state.userId}/parentdetails/children/${this.state.id}`,
          {
            birthdate: this.state.birthdate,
            id: this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            personalCode: this.state.personalCode,
            city: this.state.city,
            street: this.state.street,
            houseNumber: this.state.houseNumber,
            flatNumber: this.state.flatNumber,
            secondParent: this.state.secondParent,
            secondParentId: this.state.secondParentId,
            secondParentFirstname: this.state.secondParentFirstname,
            secondParentLastname: this.state.secondParentLastname,
            secondParentEmail: this.state.secondParentEmail,
            secondParentPhone: this.state.secondParentPhone,
            secondParentPersonalCode: this.state.secondParentPersonalCode,
            secondParentCity: this.state.secondParentCity,
            secondParentStreet: this.state.secondParentStreet,
            secondParentHouseNumber: this.state.secondParentHouseNumber,
            secondParentFlatNumber: this.state.secondParentFlatNumber,
            secondParentNumberOfKids: this.state.secondParentNumberOfKids,
            secondParentStudying: this.state.secondParentStudying,
            secondParentStudyingInstitution: this.state
              .secondParentStudyingInstitution,
            secondParentHasDisability: this.state.secondParentHasDisability,
            secondParentDeclaredResidenceSameAsLiving: this.state
              .secondParentDeclaredResidenceSameAsLiving,
            secondParentDeclaredCity: this.state.secondParentDeclaredCity,
            secondParentDeclaredStreet: this.state.secondParentDeclaredStreet,
            secondParentDeclaredHouseNumber: this.state
              .secondParentDeclaredHouseNumber,
            secondParentDeclaredFlatNumber: this.state
              .secondParentDeclaredFlatNumber,
            adopted: this.state.adopted,
          }
        )
        .then((response) => {
          console.log(response);
          alert('Vaiko duomenys atnaujinti sėkmingai');
          this.props.history.push('/tevai/vaikai');
        })

        .catch((error) => {
          if (error.response.data === 'This personal code already exists') {
            alert(
              'Pasitikrinkite ar suvedėte teisingus asmens kodus. Toks vaiko asmens kodas jau egzstuoja! '
            );
          } else if (error.response.data.message === 'Item already exists') {
            alert(
              'Pasitikrinkite ar suvedėte teisingus asmens kodus. Toks asmens kodas jau egzistuoja'
            );
          } else if (error.response.data === 'Toks asmens kodas jau užimtas') {
            alert('Pasitikrinkite asmens kodus. ' + error.response.data);
          } else if (
            error.response.data === 'Vaiko ir tėvo asmens kodai negali sutapti'
          ) {
            alert('Pasitikrinkite asmens kodus. ' + error.response.data + '!');
          } else if (
            error.response.data === 'Šis asmens kodas jau egzistuoja sistemoje!'
          ) {
            alert(
              'Pasitikrinkite ar suvedėte teisingus asmens kodus. ' +
                error.response.data
            );
          } else if (
            error.response.data === `Gimimo data negali būti iš ateities!`
          ) {
            alert(error.response.data);
          } else if (error.response.data.message === 'Invalid field entry') {
            alert('Užpildykite visus privalomus laukus!');
          } else if (
            error.response.data === `The birthdate can't be from the future`
          ) {
            alert('Gimimo data negali būti iš ateities!');
          } else if (error.response.data.message === `Bad birthdate format`) {
            alert('Netinkamas datos formatas!');
          } else if (
            error.response.data === 'Tėvas/globėjas neregistruotas sistemoje'
          ) {
            alert(
              'Registracija nesėkminga. Pirminė tėvo registracijos forma turi būti užpildyta pirma'
            );
          } else if (
            error.response.data.message ===
            'Tėvas/globėjas neregistruotas sistemoje!'
          ) {
            alert(
              'Registracija nesėkminga. Pirminė tėvo/globėjo registracijos forma neužpildyta'
            );
          } else if (error.response.status === 400) {
            alert(
              'Registracija nesėkminga! Pasitikrinkite ar pažymėjote bei užpildėte laukus teisingai!'
            );
          }
          console.log(error.response);
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
        <div className=" container  m-auto shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h3>Atnaujinkite savo vaiko duomenis</h3>
          </div>
          
          <form onSubmit={this.handleSubmit} className="form-row ">
            <div className="form-group mb-3 col-6">
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
                value={this.state.firstname}
              />
              {errors.firstname.length > 0 && (
                <span className="error">{errors.firstname}</span>
              )}
            </div>
            <div className="form-group mb-3 col-6">
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
                value={this.state.lastname}
              />
              {errors.lastname.length > 0 && (
                <span className="error">{errors.lastname}</span>
              )}
            </div>
            <div className="form-group mb-3 col-6  ">
              <label htmlFor="birthdate" className="control-label">
                Vaiko gimimo data*:
              </label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  //  dateFormat="yyyy-MM-dd"
                  name="birthdate"
                  value={this.state.birthdate}
                  onChange={this.handleChange}
                />
                {/* <DatePicker
                  className="form-control  "
                  dateFormat="yyyy-MM-dd"
                  locale="lt"
                  name="birthdate"
                  maxDate={new Date()}
                  selected={this.state.birthdate}
                  onChange={this.handleChangeDate}
                 // value={this.state.birthdate}
                /> */}
              </div>
            </div>

            <div className="form-group mb-3 col-6">
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
                value={this.state.personalCode}
              />
              {errors.personalCode.length > 0 && (
                <span className="error">{errors.personalCode}</span>
              )}
            </div>

            <div className="form-group mb-3 col-6">
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
                value={this.state.city}
              />
              {errors.city.length > 0 && (
                <span className="error">{errors.city}</span>
              )}
            </div>
            <div className="form-group mb-3 col-6">
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
                value={this.state.street}
              />
              {errors.street.length > 0 && (
                <span className="error">{errors.street}</span>
              )}
            </div>

            <div className="form-group mb-3 col-6">
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
                value={this.state.houseNumber}
              />
              {errors.houseNumber.length > 0 && (
                <span className="error">{errors.houseNumber}</span>
              )}
            </div>
            <div className="form-group mb-3 col-6">
              <label htmlFor="flatNumber" className="control-label">
                Butas:
              </label>
              <input
                type="number"
                min="1"
                placeholder="Butas"
                className="form-control"
                name="flatNumber"
                onChange={this.handleChange}
                noValidate
                value={this.state.flatNumber}
              />
            </div>
            <div className="ml-4 form-check mb-3 col-12">
              <input
                className="form-check-input"
                type="checkbox"
                name="adopted"
                checked={this.state.adopted}
                onChange={this.handleChange}
                value={this.state.adopted}
              />
              <label htmlFor="adopted" className="form-check-label">
                Esu šio vaiko Globėjas
              </label>
            </div>
            <h5 className="mt-4 form-group mb-3 col-12">
              {' '}
              Antrojo Tėvo/Globėjo duomenys
            </h5>
            <div className="ml-4 form-check mb-3 col-12">
              <input
                className="form-check-input"
                type="checkbox"
                name="secondParent"
              
                onChange={this.handleChange}
                value={this.state.secondParent}
                checked={this.state.secondParent}
              />
              <label htmlFor="secondParent" className="form-check-label">
                Pridėti antrąjį šio vaiko tėvą/globėją
              </label>
              <div className="mt-3 ml-0"><b>Pridėję antrąjį tėvą/globėją, vėliau jo duomenis galėsite redaguoti, bet pašalinti galima nebus.</b></div>
            </div>
            {this.state.secondParent ===true ? (
              <div className="form-row">
                 {/* <div><b>Pridėję antrąjį tėvą/globėją, vėliau jo duomenis galėsite redaguoti, bet pašalinti galima nebus.</b></div> */}
                <div className="form-group mb-3 col-6 mt-3">
                  <label
                    htmlFor="secondParentFirstname"
                    className="control-label"
                  >
                    Antrojo Tėvo/Globėjo Vardas*:
                  </label>
                  <input
                    type="text"
                    placeholder="Vardas"
                    className="form-control"
                    name="secondParentFirstname"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.secondParentFirstname}
                  />
                  {errors.secondParentFirstname.length > 0 && (
                    <span className="error">
                      {errors.secondParentFirstname}
                    </span>
                  )}
                </div>
                <div className="form-group mb-3 col-6 mt-3">
                  <label
                    htmlFor="secondParentLastname"
                    className="control-label"
                  >
                    Antrojo Tėvo/Globėjo Pavardė*:
                  </label>
                  <input
                    type="text"
                    placeholder="Pavardė"
                    className="form-control"
                    name="secondParentLastname"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.secondParentLastname}
                  />
                  {errors.secondParentLastname.length > 0 && (
                    <span className="error">{errors.secondParentLastname}</span>
                  )}
                </div>
                <div className="form-group mb-3 col-6">
                  <label htmlFor="secondParentEmail" className="control-label">
                    El.paštas*:
                  </label>
                  <input
                    type="email"
                    placeholder="El.paštas"
                    className="form-control"
                    name="secondParentEmail"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.secondParentEmail}
                  />
                  {errors.secondParentEmail.length > 0 && (
                    <span className="error">{errors.secondParentEmail}</span>
                  )}
                </div>
                <div className="form-group mb-3 col-6">
                  <label htmlFor="secondParentPhone" className="control-label">
                    Antrojo Tėvo/Globėjo Tel.nr*:
                  </label>
                  <input
                    type="tel"
                    placeholder="Tel.nr"
                    className="form-control"
                    name="secondParentPhone"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.secondParentPhone}
                  />
                  {errors.secondParentPhone.length > 0 && (
                    <span className="error">{errors.secondParentPhone}</span>
                  )}
                </div>
                {this.state.secondParentPersonalCode > 0 ? (
                  <div className="form-group mb-3 col-6">
                    <label
                      htmlFor="secondParentPersonalCode"
                      className="control-label"
                    >
                      Antrojo Tėvo/Globėjo Asmens Kodas*:
                    </label>
                    <input
                      type="text"
                      placeholder="Asmens kodas"
                      className="form-control"
                      name="secondParentPersonalCode"
                      onChange={this.handleChange}
                      noValidate
                      value={this.state.secondParentPersonalCode}
                    />
                    {errors.secondParentPersonalCode.length > 0 && (
                      <span className="error">
                        {errors.secondParentPersonalCode}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="form-group mb-3 col-6">
                    <label
                      htmlFor="secondParentPersonalCode"
                      className="control-label"
                    >
                      Antrojo Tėvo/Globėjo Asmens Kodas*:
                    </label>
                    <input
                      type="text"
                      placeholder="Asmens kodas"
                      className="form-control"
                      name="secondParentPersonalCode"
                      onChange={this.handleChange}
                      noValidate
                       //value={this.state.secondParentPersonalCode}
                    />
                    {errors.secondParentPersonalCode.length > 0 && (
                      <span className="error">
                        {errors.secondParentPersonalCode}
                      </span>
                    )}
                  </div>
                )}

                <div className="form-group mb-3 col-6">
                  <label htmlFor="secondParentCity" className="control-label">
                    Antrojo Tėvo/Globėjo Miestas*:
                  </label>
                  <input
                    type="text"
                    placeholder="Miestas"
                    className="form-control"
                    name="secondParentCity"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.secondParentCity}
                  />
                  {errors.secondParentCity.length > 0 && (
                    <span className="error">{errors.secondParentCity}</span>
                  )}
                </div>
                <div className="form-group mb-3 col-6">
                  <label htmlFor="secondParentStreet" className="control-label">
                    Antrojo Tėvo/Globėjo Gatvė*:
                  </label>
                  <input
                    type="text"
                    placeholder="Gatvė"
                    className="form-control"
                    name="secondParentStreet"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.secondParentStreet}
                  />
                  {errors.secondParentStreet.length > 0 && (
                    <span className="error">{errors.secondParentStreet}</span>
                  )}
                </div>

                <div className="form-group mb-3 col-6">
                  <label
                    htmlFor="secondParentHouseNumber"
                    className="control-label"
                  >
                    Antrojo Tėvo/Globėjo Namo Numeris*:
                  </label>
                  <input
                    type="text"
                    placeholder="Namo numeris"
                    className="form-control"
                    name="secondParentHouseNumber"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.secondParentHouseNumber}
                  />
                  {errors.secondParentHouseNumber.length > 0 && (
                    <span className="error">
                      {errors.secondParentHouseNumber}
                    </span>
                  )}
                </div>
                <div className="form-group mb-3 col-6">
                  <label
                    htmlFor="secondParentFlatNumber"
                    className="control-label"
                  >
                    Antrojo Tėvo/Globėjo Butas:
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Butas"
                    className="form-control"
                    name="secondParentFlatNumber"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.secondParentFlatNumber}
                  />
                </div>
                {this.state.secondParentNumberOfKids > 0 ? (
                  <div className="form-group mb-3 col-6">
                    <label
                      htmlFor="secondParentNumberOfKids"
                      className="control-label"
                    >
                      Kiek antrasis Tėvas/Globėjas turi nepilnamečių vaikų?*
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="Skaičius"
                      className="form-control"
                      name="secondParentNumberOfKids"
                      onChange={this.handleChange}
                      noValidate
                      value={this.state.secondParentNumberOfKids}
                      onInvalid={(e) => {
                        e.target.setCustomValidity('Įveskite vaikų skaičių.');
                      }}
                      onInput={(e) => e.target.setCustomValidity('')}
                      required
                    />
                    {errors.secondParentNumberOfKids.length > 0 && (
                      <span className="error">
                        {errors.secondParentNumberOfKids}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="form-group mb-3 col-6">
                    <label
                      htmlFor="secondParentNumberOfKids"
                      className="control-label"
                    >
                      Kiek antrasis Tėvas/Globėjas turi nepilnamečių vaikų?*
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="Skaičius"
                      className="form-control"
                      name="secondParentNumberOfKids"
                      onChange={this.handleChange}
                      noValidate
                      // value={this.state.secondParentNumberOfKids}
                      onInvalid={(e) => {
                        e.target.setCustomValidity('Įveskite vaikų skaičių.');
                      }}
                      onInput={(e) => e.target.setCustomValidity('')}
                      required
                    />
                    {errors.secondParentNumberOfKids.length > 0 && (
                      <span className="error">
                        {errors.secondParentNumberOfKids}
                      </span>
                    )}
                  </div>
                )}

                <div className="ml-4 form-check mb-3 col-12">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="secondParentStudying"
                    checked={this.state.secondParentStudying}
                    onChange={this.handleChange}
                    value={this.state.secondParentStudying}
                  />
                  <label
                    htmlFor="secondParentStudying"
                    className="form-check-label"
                  >
                    Antrasis Tėvas/Globėjas mokosi bendrojo lavinimo mokykloje
                  </label>
                </div>

                {this.state.secondParentStudying ? (
                  <div className="mb-3">
                    <label
                      htmlFor="secondParentStudyingInstitution"
                      className="control-label"
                    >
                      Mokymosi įstaigos pavadinimas*:
                    </label>
                    <input
                      type="text"
                      placeholder="Mokymosi įstaiga"
                      className="form-control"
                      name="secondParentStudyingInstitution"
                      onChange={this.handleChange}
                      value={this.state.secondParentStudyingInstitution}
                      // noValidate
                      pattern="[a-zA-Z-ząčęėįšųūžĄČĘĖĮŠŲŪŽ . - 0-9-]+"
                      onInvalid={(e) => {
                        e.target.setCustomValidity(
                          'Įveskite mokymosi įstaigos pavadinimą.'
                        );
                      }}
                      onInput={(e) => e.target.setCustomValidity('')}
                      required
                    />
                  </div>
                ) : <div>  </div>}
                <div className="ml-4 form-check mb-3 col-12">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="secondParentHasDisability"
                    id="hasDisability"
                    checked={this.state.secondParentHasDisability}
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.secondParentHasDisability}
                  />
                  <label
                    htmlFor="secondParentHasDisability"
                    className="form-check-label"
                  >
                    Antrasis Tėvas/Globėjas mažesnį nei 40% darbingumo lygį
                  </label>
                </div>

                <div className="ml-4 form-check mb-3 col-12">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={
                      this.state.secondParentDeclaredResidenceSameAsLiving
                    }
                    name="secondParentDeclaredResidenceSameAsLiving"
                    id="secondParentDeclaredResidenceSameAsLiving"
                    onChange={this.handleChange}
                    value={this.state.secondParentDeclaredResidenceSameAsLiving}
                  />
                  <label
                    htmlFor="secondParentDeclaredResidenceSameAsLiving"
                    className="form-check-label"
                  >
                    Jei deklaruota gyvenamoji vieta sutampa, pažymėkite.
                  </label>
                </div>
                {this.state.secondParentDeclaredResidenceSameAsLiving ? null : (
                  <div className="form-row">
                    <div className="form-group mb-3 col-6 mt-3">
                      <label
                        htmlFor="secondParentDeclaredCity"
                        className="control-label"
                      >
                        Antrojo Tėvo/Globėjo Deklaruotas Miestas*:
                      </label>
                      <input
                        type="text"
                        placeholder="Deklaruotas Miestas"
                        className="form-control"
                        name="secondParentDeclaredCity"
                        onChange={this.handleChange}
                        value={this.state.secondParentDeclaredCity}
                        //  noValidate
                        pattern="[a-zA-Z-ząčęėįšųūžĄČĘĖĮŠŲŪŽ -]+"
                        onInvalid={(e) => {
                          e.target.setCustomValidity(
                            'Įveskite deklaruotą miestą tinkamu formatu.'
                          );
                        }}
                        onInput={(e) => e.target.setCustomValidity('')}
                        required
                      />
                      {/* {errors.secondParentDeclaredCity.length > 0 && (
                                <span className="error">
                                  {errors.secondParentDeclaredCity}
                                </span>
                              )} */}
                    </div>
                    <div className="form-group mb-3 col-6 mt-3">
                      <label
                        htmlFor="secondParentDeclaredStreet"
                        className="control-label"
                      >
                        Antrojo Tėvo/Globėjo Deklaruota Gatvė*:
                      </label>
                      <input
                        type="text"
                        placeholder="Deklaruota Gatvė"
                        className="form-control"
                        name="secondParentDeclaredStreet"
                        onChange={this.handleChange}
                        value={this.state.secondParentDeclaredStreet}
                        // noValidate
                        // pattern="[a-zA-Z-ząčęėįšųūžĄČĘĖĮŠŲŪŽ . - 0-9-]+"
                        pattern="^[a-zA-ząčęėįšųūžĄČĘĖĮŠŲŪŽ ]+[- a-zA-ząčęėįšųūžĄČĘĖĮŠŲŪŽ0-9 . -  ]*"
                        onInvalid={(e) => {
                          e.target.setCustomValidity(
                            'Įveskite deklaruotą gatvę tinkamu formatu.'
                          );
                        }}
                        onInput={(e) => e.target.setCustomValidity('')}
                        required
                      />
                      {errors.secondParentDeclaredStreet.length > 0 && (
                        <span className="error">
                          {errors.secondParentDeclaredStreet}
                        </span>
                      )}
                    </div>

                    <div className="form-group mb-3 col-6">
                      <label
                        htmlFor="secondParentDeclaredHouseNumber"
                        className="control-label"
                      >
                        Antrojo Tėvo/Globėjo Deklaruotas Namo Numeris*:
                      </label>
                      <input
                        type="text"
                        placeholder="Deklaruotas Namo Numeris"
                        className="form-control"
                        name="secondParentDeclaredHouseNumber"
                        onChange={this.handleChange}
                        value={this.state.secondParentDeclaredHouseNumber}
                        // noValidate

                        // pattern="[a-zA-Z-z - 0-9-]+"
                        // onInvalid={(e) => {
                        //   e.target.setCustomValidity(
                        //     'Įveskite deklaruotą namo numerį tinkamu formatu.'
                        //   );
                        // }}
                        // onInput={(e) => e.target.setCustomValidity('')}
                        pattern="^[1-9]+[ a-zA-Z 0-9 ]*"
                        onInvalid={(e) => {
                          e.target.setCustomValidity(
                            'Įveskite deklaruotą namo numerį tinkamu formatu, pvz.: 1A'
                          );
                        }}
                        onInput={(e) => e.target.setCustomValidity('')}
                        required
                      />
                    </div>
                    <div className="form-group mb-3 col-6">
                      <label
                        htmlFor="secondParentDeclaredFlatNumber"
                        className="control-label"
                      >
                        Antrojo Tėvo/Globėjo Deklaruotas Butas:
                      </label>
                      <input
                        type="number"
                        min="1"
                        placeholder="Deklaruotas Butas"
                        className="form-control"
                        name="secondParentDeclaredFlatNumber"
                        onChange={this.handleChange}
                        value={this.state.secondParentDeclaredFlatNumber}
                      />
                    </div>
                  </div>
                )}
              </div>
            ) :   <div></div>}

            <div className="mt-3 form-group mb-3 col-6">
              {' '}
              * - privalomi laukai
            </div>
            <div className="">
              <button
                type="submit"
                className="btn btn-success  btn-lg btn-block mt-5"
              >
                Atnaujinti
              </button>
            </div>
          </form>

          <div 
          className="col text-center delete"
          >
            <button
              //onClick={this.deleteChild}
              id="deleteChildData"
              className="btn mt-3"
              data-toggle="modal"
              data-target={`#staticBackdrop${this.state.id}`}
              value={this.state.id}
            >
              Ištrinti vaiko duomenis
            </button>
            <ModalComponentChildren
              childId={this.state.id}
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              deleteChild={this.deleteChild}
            />
          </div>
          
        </div>
      </div>
    );
  }
}
