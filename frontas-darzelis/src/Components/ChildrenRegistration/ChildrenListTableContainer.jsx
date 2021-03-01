import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import ChildrenListTablePresentation from './ChildrenListTablePresentation';
import '../../Style/UsersLandings.css'

export default class ChildrenListTableContainer extends Component {
  constructor() {
    super();
    this.state = {
      children: [],
      //userId
      id: '',
    };
  }

  componentDidMount() {
    console.log('component did mount');
    axios
      .get(`${API}/api/users/loggeduserid`)
      .then((response) => {
        this.setState({
          id: response.data,
        });
        console.log('user id: ' + this.state.id);
        return axios.get(
          `${API}/api/users/${this.state.id}/parentdetails/children`
        );
      })
      .then((response) => {
        this.setState({
          children: response.data,
        });
      })
      .catch((error) => console.log(error));
        // console.log('children: ' + this.state.children);
  }
  deleteChild = (event) => {
    //event.preventDefault();
    axios
      .delete(
        `${API}/api/users/${this.state.id}/parentdetails/children/${event.target.value}`
      )
      .then(() => {
        axios
          .get(`${API}/api/users/${this.state.id}/parentdetails/children`)
          .then((response) => this.setState({ children: response.data }));
      })
      .catch((err) => console.log(err.data));
    console.log('deleteChildren');
  };

  render() {
    return (
      <div className="mt-5">
        <div className="mb-4">
          <h4>Vaikai</h4>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vardas</th>
              <th scope="col">Pavardė</th>
              <th scope="col">Peržiūrėti/Atnaujinti vaiko duomenis</th>
              <th scope="col">Peržiūrėti/Atnaujinti prašymą į darželį </th>
              <th scope="col">Ištrinti vaiką</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {this.state.children.length > 0 && (
            <tbody>
              <ChildrenListTablePresentation
                children={this.state.children}
                deleteChild={this.state.deleteChild}
              />
            </tbody>
          )}
        </table>
      </div>
    );
  }
}
