import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsersListTablePresentation from './UsersListTablePresentation';
import LogoutPresentation from '../Utilities/LogoutPresentation';
import NavigationComponent from '../SysAdminLanding/NavigationComponent';

export default class UsersListTableContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      // searchQuery: '',
      // search: "",
      // newUsers: []
    };
  }

  componentDidMount = () => {
    console.log('component did mount');
    axios
      .get(API + '/api/users')
      .then((response) => this.setState({ users: response.data }))
      .catch((error) => console.log(error));
  };

  //   handleSearchChange = (e) => {
  //     this.setState({ search: e.target.value });
  //     axios
  //         .get(`${API}/api/users/emails/${e.target.value}`)
  //         .then(res => this.setState({ newUsers: res.data }))
  //         .catch(err => console.log(err))
  // }
  // handleSearch = (e) => {

  //   this.setState({ searchQuery: e.target.value });
  //   axios.get(`${API}/api/users/${e.target.value}`).then((response) => {
  //     this.setState({ users: response.data });
  //   });
  // };
  deleteUser = (event) => {
    event.preventDefault();
    axios
      .delete(`${API}/api/users/${event.target.value}`)
      .then(() => {
        axios
          .get(`${API}/api/users`)
          .then((response) => this.setState({ users: response.data }));
      })
      .catch((err) => console.log(err));
  };

  // resetPassword = (event) => {
  //   event.preventDefault();
  //   // const outputUser = {
  //   //   password: this.state.firstname,
  //   // };
  //   axios
  //     .put(
  //       `${API}/api/users/${this.state.id}`,
  //       // outputUser
  //       { password: this.state.firstname }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       alert('Vartotojo slaptažodis atsatatytas į pirminį');
  //     });
  // };

  render() {
    return (
      <div className="container mt-5">
        <NavigationComponent />
        <LogoutPresentation />
        <Link to={`/admin/registracija`} className="btn btn-primary mb-5">
          Pridėti naują vartotoją
        </Link>
        <div>
          {/* <input
            type="text"
            className="form-control my-3"
            placeholder="Ieškoti pagal el.paštą..."
            value={this.state.searchQuery}
            onChange={this.handleSearch}
        /> */}
          {/* <input className='my-3' type='text' value={this.search} onChange={this.handleSearchChange} placeholder={'Ieškoti pagal el.paštą'} /> */}
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vardas</th>
              <th scope="col">Pavardė</th>
              <th scope="col">El.paštas</th>
              <th scope="col">Rolė</th>

              <th scope="col">Atnaujinti vartotojo duomenis</th>
              <th scope="col">Ištrinti vartotoją</th>
            </tr>
          </thead>
          {this.state.users.length > 0 && (
            <tbody>
              <UsersListTablePresentation
                users={this.state.users}
                deleteUser={this.deleteUser}
                // resetPassword={this.resetPassword}
                // searchQuery={this.searchQuery}
                // handleSearch={this.handleSearch}
              />
            </tbody>
          )}
        </table>
      </div>
    );
  }
}
