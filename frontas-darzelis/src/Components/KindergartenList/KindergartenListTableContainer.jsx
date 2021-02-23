import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { KindergartensListTablePresentation } from './KindergartensListTablePresentation';
import LogoutPresentation from '../Utilities/LogoutPresentation';
import NavigationComponent from '../SysAdminLanding/NavigationComponent';

export default class KindergartenListTableContainer extends Component {
  constructor() {
    super();
    this.state = {
      kindergartens: [],
      role: '',
    };
  }
  componentDidMount() {
    console.log('component did mount');
    axios
      .get(API + '/api/kindergartens')
      .then((res) => {
        this.setState({
          kindergartens: res.data,
        });
        console.log();
        return axios.get(`${API}/api/users/loggedrole`);
      })
      .then((res) => {
        this.setState({
          role: res.data,
        });
        console.log('role: ' + this.state.role);
      })
      .catch((error) => console.log(error));
  }

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
    console.log('deleteKindergarten');
  };

  render() {
    if (this.state.role === 'EDU') {
      return (
        <div className="container mt-5">
          <Link
            to={`/admin/edu/darzelioregistracija`}
            className="btn btn-primary mb-5"
          >
            Pridėti naują darželį
          </Link>
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
            {this.state.kindergartens.length > 0 && (
              <tbody>
                <KindergartensListTablePresentation
                  kindergartens={this.state.kindergartens}
                  deleteKindergarten={this.deleteKindergarten}
                />
              </tbody>
            )}
          </table>
        </div>
      );
    } else if (this.state.role === 'ADMIN') {
      return (
        <div className="container mt-5">
          <NavigationComponent />
        <LogoutPresentation />
          <Link
            to={`/admin/darzelioregistracija`}
            className="btn btn-primary mb-5"
          >
            Pridėti naują darželį
          </Link>
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
            {this.state.kindergartens.length > 0 && (
              <tbody>
                <KindergartensListTablePresentation
                  kindergartens={this.state.kindergartens}
                  deleteKindergarten={this.deleteKindergarten}
                />
              </tbody>
            )}
          </table>
        </div>
      );
    } else {
      return null;
    }
  }
}
