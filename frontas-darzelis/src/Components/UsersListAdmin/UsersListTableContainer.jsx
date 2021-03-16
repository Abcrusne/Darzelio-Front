import React, { Component, lazy } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../Style/UsersLandings.css';
const ModalComponent = lazy(() => import( '../Modal/ModalComponent'));

export default class UsersListTableContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchTerm: '',
      pageNumber: 0,
    };
  }

  componentDidMount = () => {
    let isMounted = true;
    axios
      .get(API + '/api/users')
      .then((response) => this.setState({ users: response.data }))

    // .catch((err) => console.log(err));
    .catch((err) =>  {});
    return () => {isMounted = false};
  };
  handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;

    this.setState({
      searchTerm: searchTerm,
    });
  };

  deleteUser = (event) => {
    event.preventDefault();
    axios
      .delete(`${API}/api/users/${event.target.value}`)
      .then(() => {
        axios
          .get(`${API}/api/users`)
          .then((response) => this.setState({ users: response.data }));
      })
     // .catch((err) => console.log(err));
     .catch((err) =>  {});
  };

  render() {
    let filteredUsers = this.state.users.filter((user) => {
      return user.email.toLowerCase().indexOf(this.state.searchTerm) !== -1;
    });
    return (
      <div className="container mt-5">
        <Link to={`/admin/registracija`} className="btn btn-primary mb-5">
          Pridėti naują vartotoją
        </Link>
        <div className="mb-4">
          <h4> Vartotojų sąrašas</h4>
        </div>
        <div className="mb-4">
          <input
            className="form-control mt-3 col-4"
            placeholder="Paieška pagal el.paštą"
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleSearch}
          />
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
              <th scope="col">Ištrinti vartotoją ir jo duomenis</th>
              <th scope="col"></th>
            </tr>
          </thead>

          {this.state.users.length > 0 ? (
            filteredUsers.map(
              ({ id, firstname, lastname, email, role }, index) => {
                const roleLt =
                  role === 'PARENT'
                    ? 'Tėvas/Globėjas'
                    : role === 'EDU'
                    ? 'Švietimo specialistas'
                    : role === 'ADMIN'
                    ? 'Sistemos administratorius'
                    : 'Nenurodyta';

                return (
                  <tbody key={id}>
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{firstname}</td>
                      <td> {lastname}</td>
                      {role === 'PARENT' ? (
                        <td>
                          <Link
                            className="text-decoration-none mr-3"
                            to={`/admin/duomenys/${id}`}
                          >
                            {email}
                          </Link>
                        </td>
                      ) : (
                        <td>{email}</td>
                      )}

                      <td>{roleLt}</td>

                      {role === 'ADMIN' ? (
                        <td> </td>
                      ) : (
                        <td>
                          <Link
                            className="text-decoration-none mr-3"
                            to={`/admin/vartotojai/${id}`}
                          >
                            Atnaujinti duomenis
                          </Link>
                        </td>
                      )}

                      {role === 'ADMIN' ? (
                        <td></td>
                      ) : (
                        <td>
                          <button
                            className=" btn btn-light"
                            data-toggle="modal"
                            data-target={`#staticBackdrop${id}`}
                            value={id}
                          >
                            Ištrinti
                          </button>
                        </td>
                      )}

                      <td>
                        <ModalComponent
                          userId={id}
                          email={email}
                          deleteUser={this.deleteUser}
                        />
                      </td>
                    </tr>
                  </tbody>
                );
              }
            )
          ) : (
            <tbody>
              <tr>
                <td>Loading...</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  }
}
