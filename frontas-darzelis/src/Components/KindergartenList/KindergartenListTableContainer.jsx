import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { KindergartensListTablePresentation } from './KindergartensListTablePresentation';
import ModalComponentKindergarten from '../Modal/ModalComponentKindergarten';
import "../../Style/UsersLandings.css"
import "../../Style/style.css"

export default class KindergartenListTableContainer extends Component {
  constructor() {
    super();
    this.state = {
      kindergartens: [],
      searchTerm: '',
      role: '',
     
    };
  }
  componentDidMount() {
    //console.log('component did mount');
    axios
      .get(API + '/api/kindergartens')
      .then((res) => {
        this.setState({
          kindergartens: res.data,
        });
        //console.log();
        return axios.get(`${API}/api/users/loggedrole`);
      })
      .then((res) => {
        this.setState({
          role: res.data,
        });
        //console.log('role: ' + this.state.role);
      })
      .catch((error) => console.log(error));
  }
  handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;

    this.setState({
      searchTerm: searchTerm,
    });
  };

  deleteKindergarten = (event) => {
    event.preventDefault();
    axios
      .delete(`${API}/api/kindergartens/${event.target.value}`)
      .then(() => {
        axios
          .get(`${API}/api/kindergartens`)
          .then((response) => this.setState({ kindergartens: response.data }));
      })
      .catch((err) => console.log(err));
    //console.log('deleteKindergarten');
  };



  render() {
    let filteredKindergartens= this.state.kindergartens.filter(
      (kindergarten) =>{
        return kindergarten.name.toLowerCase().indexOf(this.state.searchTerm)
        !== -1;
      }
    );
    if (this.state.role === 'EDU') {
      return (
        <div className="container mt-5">
          <Link
            to={`/admin/edu/darzelioregistracija`}
            className="btn btn-primary mb-5"
          >
            Pridėti naują darželį
          </Link>
          <div className="mb-4">
        <input
        className="form-control mt-3 col-4"
        placeholder="Paieška pagal darželio pavadinimą"
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
                <th scope="col">Pavadinimas</th>
                <th scope="col">Adresas</th>
                <th scope="col">Laisvos vietos 2-3m. amžiaus grupėje</th>
                <th scope="col">Laisvos vietos 3-6m. amžiaus grupėje</th>

                <th scope="col">Atnaujinti darželio duomenis</th>
                <th scope="col">Ištrinti darželį</th>
                <th scope="col"></th>
              </tr>
            </thead>

        
     
              {this.state.kindergartens.length > 0 &&
                filteredKindergartens.map(
                  (
                    {
                      id,
                      address,
                      name,
                      spotsInFirstAgeGroup,
                      spotsInSecondAgeGroup,
                    },
                    index
                  ) => {
                    return (
                      <tbody key ={id}>
                      <tr key={id}>
                        <th scope="row">{index + 1}</th>
                        <td>{name}</td>
                        <td>{address}</td>
                        <td> {spotsInFirstAgeGroup}</td>
                        <td>{spotsInSecondAgeGroup}</td>

                        <td>
                          <Link
                            className="text-decoration-none mr-3"
                            to={`/admin/edu/darzeliai/${id}`}
                          >
                            Atnaujinti duomenis
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-light"
                            data-toggle="modal"
                            data-target={`#staticBackdrop${id}`}
                            value={id}
                          >
                            Ištrinti
                          </button>
                        </td>
                        <td>
                          <ModalComponentKindergarten
                            kindergartenId={id}
                            name={name}
                            deleteKindergarten={this.deleteKindergarten}
                          />
                        </td>
                      </tr>
                      </tbody> );
                  }
                )}
        
              {/* <KindergartensListTablePresentation
                //   kindergartens={this.state.kindergartens}
                //   deleteKindergarten={this.deleteKindergarten}
                // /> */}
         
          </table>
        </div>
      );
    } else if (this.state.role === 'ADMIN') {
      return (
        <div className="container mt-5">
          <Link
            to={`/admin/darzelioregistracija`}
            className="btn btn-primary mb-5"
          >
            Pridėti naują darželį
          </Link>
          <div className="mb-4">
        <input
        className="form-control mt-3 col-4"
        placeholder="Paieška pagal darželio pavadinimą"
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
                <th scope="col">Pavadinimas</th>
                <th scope="col">Adresas</th>
                <th scope="col">Laisvos vietos 2-3m. amžiaus grupėje</th>
                <th scope="col">Laisvos vietos 3-6m. amžiaus grupėje</th>
                <th scope="col">Atnaujinti darželio duomenis</th>
                <th scope="col">Ištrinti darželį</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {this.state.kindergartens.length > 0 &&
                filteredKindergartens.map(
                  (
                    {
                      id,
                      address,
                      name,
                      spotsInFirstAgeGroup,
                      spotsInSecondAgeGroup,
                    },
                    index
                  ) => {
                    return (
                      <tr key={id}>
                        <th scope="row">{index + 1}</th>
                        <td>{name}</td>
                        <td>{address}</td>
                        <td> {spotsInFirstAgeGroup}</td>
                        <td>{spotsInSecondAgeGroup}</td>

                        <td>
                          <Link
                            className="text-decoration-none mr-3"
                            to={`/admin/darzeliai/${id}`}
                          >
                            Atnaujinti duomenis
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-light"
                            data-toggle="modal"
                            data-target={`#staticBackdrop${id}`}
                            value={id}
                          >
                            Ištrinti
                          </button>
                        </td>
                        <td>
                          <ModalComponentKindergarten
                            kindergartenId={id}
                            name={name}
                            deleteKindergarten={this.deleteKindergarten}
                          />
                        </td>
                      </tr>
                    );
                  }
                )}
            
              {/* <KindergartensListTablePresentation
                //   kindergartens={this.state.kindergartens}
                //   deleteKindergarten={this.deleteKindergarten}
                // /> */}
            </tbody>
          </table>
        </div>
      );
    } else {
      return null;
    }
  }
}
