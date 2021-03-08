import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import '../../Style/style.css';

export default class UpdateUserEmailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      role: '',
      password: '',
      markedForDeletion: '',

      errors: {
        email: '',
      },
    };
  }
  componentDidMount() {
    axios
      .get(`${API}/api/users/loggeduserid`)
      .then((res) => {
        this.setState({
          id: res.data,
        });
        console.log('user id:' + this.state.id);
        return axios.get(`${API}/api/users/${this.state.id}`);
      })
      .then((res) =>
        this.setState({
          id: res.data.id,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          email: res.data.email,
          role: res.data.role,
          password: res.data.password,
          markedForDeletion: res.data.markedForDeletion,
        })
      )
      .catch((err) => console.log(err));
  }
  // componentDidMount() {
  //   console.log('component did mount');
  //   axios
  //     .get(`${API}/api/users/${this.props.match.params.id}`)
  //     .then((res) =>
  //       this.setState({
  //         id: res.data.id,
  //         firstname: res.data.firstname,
  //         lastname: res.data.lastname,
  //         email: res.data.email,
  //         role: res.data.role,
  //         password: res.data.password,
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // }

  handleChange = (event) => {
    // event.preventDefault();

    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );
    const { name, value } = event.target;
    let errors = this.state.errors;
    let letters = /^[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/;
    switch (name) {
      case 'email':
        errors.email = validEmailRegex.test(value)
          ? ''
          : 'El.paštas netinkamas!';
        break;
      default:
        break;
    }

    this.setState(
      {
        errors,
        [name]: value,
      },
      () => {
        // console.log(errors);
      }
    );
    // console.log(this.state);
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
          `${API}/api/users/${this.state.id}`,

          {
            id: this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            role: this.state.role,
            password: this.state.password,
            markedForDeletion: this.state.markedForDeletion,
            // requestedDelete: this.state.requestedDelete
          }
        )
        .then((response) => {
          console.log(response);
          alert('Duomenys atnaujinti sėkmingai!');
          if (this.state.role === 'PARENT') {
            this.props.history.push('/login');
          } else if (this.state.role === 'EDU') {
            this.props.history.push('/login');
          } else if (this.state.role === 'ADMIN') {
            this.props.history.push('/login');
          }
        })

        .catch((error) => {
          if (error.response.data.message === 'Item already exists') {
            alert('Toks el.paštas jau egzistuoja! ');
          } else if (error.response.data.message === 'Invalid field entry') {
            alert('Užpildykite visus laukus!');
          } else if (error.response.status === 400) {
            alert(
              'Nepavyko pakeisti! Pasitikrinkite ar pažymėjote bei užpildėte laukus teisingai!'
            );
          }
          console.log(error);
        });
    } else {
      console.error('Invalid Form');
      alert(
        'Nepavyko pakeisti! Pasitikrinkite ar pažymėjote bei užpildėte laukus teisingai. '
      );
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container mt-5">
        <div className="col-lg-5 m-auto shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h3>Atnaujinti naudotojo el.paštą</h3>
          </div>
          <form onSubmit={this.handleSubmit} noValidate className="form-group ">
            <div className="mb-3">
              <label htmlFor="email" className="control-label">
                Naudotojo el.paštas*:
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

            <div> * - privalomi laukai</div>

            <div>
              <button type="submit" className="btn btn-success">
                Išsaugoti
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}