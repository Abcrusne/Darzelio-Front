import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsersListTablePresentation from './UsersListTablePresentation';
import Loading from '../Loading/Loading';
import ModalComponent from '../Modal/ModalComponent';
import '../../Style/UsersLandings.css';
import { Pagination } from '@material-ui/lab';

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
    //console.log('component did mount');
    let isMounted = true;
    axios
      .get(API + '/api/users')
      .then((response) => this.setState({ users: response.data }))

      .catch((error) => console.log(error));
    isMounted = false;
    // console.log('users: ' + this.state.users);
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
      .catch((err) => console.log(err));
    //console.log('deleteUser');
  };

  //   handlePageChange =(event, value)=> {
  // this.setState({
  //   pageNumber: value,
  // }, () => {
  //   this.componentDidMount();
  // }
  // )
  //   }

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
              <th scope="col"> Prašymas ištrinti anketą</th>
              <th scope="col">Ištrinti vartotoją</th>
              <th scope="col"></th>
            </tr>
          </thead>

          {this.state.users.length > 0 ? (
            filteredUsers.map(
              (
                { id, firstname, lastname, email, role, markedForDeletion },
                index
              ) => {
                const roleLt =
                  role === 'PARENT'
                    ? 'Tėvas/Globėjas'
                    : role === 'EDU'
                    ? 'Švietimo specialistas'
                    : role === 'ADMIN'
                    ? 'Sistemos administratorius'
                    : 'Nenurodyta';

                const markedForDeletionLt =
                  markedForDeletion === true
                    ? 'Ištrinti'
                    : markedForDeletion === false
                    ? '-'
                    : 'nenurodyta';

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

                      <td>
                        <Link
                          className="text-decoration-none mr-3"
                          to={`/admin/vartotojai/${id}`}
                        >
                          Atnaujinti duomenis
                        </Link>
                      </td>
                      <td>{markedForDeletionLt}</td>
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
            // {/* <UsersListTablePresentation
            //   users={this.state.users}
            //    deleteUser={this.deleteUser}
            //    searchTerm= {this.state.searchTerm}

            // /> */}

            <tbody>
              <tr>
                <td>Loading...</td>
              </tr>
            </tbody>
          )}
        </table>
        {/* <Pagination
           className="my-3"
           count={this.state.users.size}
           page = {3}
           siblingCount={1}
           boundaryCount={1}
           variant="outlined"
           shape="rounded"
           onChange={this.handlePageChange}
          /> */}
      </div>
    );
  }
}
