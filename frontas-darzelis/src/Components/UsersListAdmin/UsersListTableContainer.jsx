import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsersListTablePresentation from './UsersListTablePresentation';
import Loading from '../Loading/Loading';
import ModalComponent from '../Modal/ModalComponent';
import "../../Style/UsersLandings.css"


export default class UsersListTableContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchTerm: "",
    //  isOpen: false,
      // searchQuery: '',
      // search: "",
      // newUsers: []
    };
  }
  // const [searchTerm, setSearchTerm] = useState('');
  componentDidMount = () => {
    console.log('component did mount');
    axios
      .get(API + '/api/users')
      .then((response) => 
      this.setState({ users: response.data })
     
      )
     
      .catch((error) => console.log(error));
        // console.log('users: ' + this.state.users);
  };
handleSearch= (event)=> {
  event.preventDefault();
        const searchTerm = event.target.value;

        this.setState({
            searchTerm: searchTerm,
        });
     
}
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
      console.log("deleteUser");
  };


  render() {
    let filteredUsers= this.state.users.filter(
      (user) =>{
        return user.email.toLowerCase().indexOf(this.state.searchTerm)
        !== -1;
      }
    );
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
        name= "searchTerm"
value={this.state.searchTerm}
onChange= {this.handleSearch}
       
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
            
              filteredUsers
    .map(
      ({ id, firstname, lastname, email, role, markedForDeletion }, index) => {
        const roleLt =
          role === 'PARENT'
            ? 'Tėvas/Globėjas'
            : role === 'EDU'
            ? 'Švietimo specialistas'
            : 'Nenurodyta';

        const markedForDeletionLt =
          markedForDeletion === true
            ? 'Ištrinti'
            : markedForDeletion === false
            ? '-'
            : 'nenurodyta';

        return (
          <tbody>
          <tr key={id}>
            <th scope="row">{index + 1}</th>
            <td>{firstname}</td>
            <td> {lastname}</td>
            <td>{email}</td>
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
            <td>
              <ModalComponent
                userId={id}
                email={email}
                deleteUser={this.deleteUser}
              />
            </td>
          </tr>
        </tbody>);
      }
    )
              // {/* <UsersListTablePresentation
              //   users={this.state.users}
              //    deleteUser={this.deleteUser}
              //    searchTerm= {this.state.searchTerm}
                
              // /> */}
            
          ) : <Loading/>}
          
        </table>
      </div>
    );
  }
}

