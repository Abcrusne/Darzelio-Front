import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// import ChildrenListTablePresentation from './ChildrenListTablePresentation';
import '../../Style/UsersLandings.css';
import Loading from '../Loading/Loading';
import ChildrenTablePresentation from './ChildrenTablePresentationByAdmin';

export default class ChildrenTable extends Component {
  constructor() {
    super();
    this.state = {
      children: [],
      //parent id
      parentId: "",
    };
  }
  componentDidMount() {
    axios
      .get(`${API}/api/users/${this.props.match.params.id}/parentdetails/children`)
      .then((res) => {
        this.setState({
          children: res.data,
          parentId: this.props.match.params.id,
        });
        // console.log('parent id ' + this.state.id);
        // console.log('user parent id ' + this.state.userId);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="mt-5">
        <div className="mb-4">
          <h4>Vaikai</h4>
        </div>
        <NavLink to={`/admin/vaiko-registracija/${this.props.match.params.id}`} className="btn btn-primary mb-5">
          Pridėti šiam tėvui/globėjui vaiką
        </NavLink>
        {
          this.state.children.length > 0 ? (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Vardas</th>
                    <th scope="col">Pavardė</th>
                    <th scope="col">Peržiūrėti/Atnaujinti vaiko duomenis</th>
                    <th scope="col">
                      Peržiūrėti/Atnaujinti prašymą į darželį{' '}
                    </th>
                  </tr>
                </thead>
                {/* {this.state.children.length > 0 &&  ( */}

                <tbody>
                  <ChildrenTablePresentation children={this.state.children} parentId={this.state.parentId} />
                </tbody>
                {/* )}  */}
              </table>
            </div>
          ) : (
                   //<Loading/>
            <p>
              {' '}
              Tėvas/Globėjas dar nepateikė jokių duomenų apie savo vaikus.
            </p>
          )
     
        }
      </div>
    );
  }
}
