import axios from 'axios';
import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import { Link } from 'react-router-dom';
import ModalComponentPdf from '../Modal/ModalComponentPdf';

export default class ChildrenPdfTable extends Component {
  constructor() {
    super();
    this.state = {
      children: [],
    };
  }

  componentDidMount() {
    axios
      .get(API + '/api/users/getloggeduserchildren')
      .then((res) => this.setState({ children: res.data }));
  }

  deletePdf = (event) => {
    event.preventDefault();
    axios
      .delete(`${API}/api/users/pdf/${event.target.value}/delete`)
      .then(() => {
        alert('Pažyma ištrinta');
        this.props.history.push('/tevai/pazymos');
      })
      .catch((err) => console.log(err));
    console.log('deletePdf');
  };

  render() {
    let sortedChildren = [...this.state.children];
    sortedChildren.sort((a, b) => {
      if (a.firstname < b.firstname) {
        return -1;
      }
      if (a.firstname > b.firstname) {
        return 1;
      }
      return 0;
    });

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"> Vaiko vardas</th>
              <th scope="col">Pažymos</th>
              <th scope="col">Ištrinti</th>
            </tr>
          </thead>
          <tbody>
            {this.state.children.length > 0 ? (
              sortedChildren.map(
                ({ id, firstname, lastname, healthRecordId }, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        {firstname} {lastname}
                      </td>
                      {healthRecordId > 0 ? (
                        <td>
                          <a
                            href={`${API}/api/users/pdf/${id}/download`}
                            target="_blank"
                          >
                            Atsisiųsti vaiko pažymą
                          </a>
                        </td>
                      ) : (
                        <td>Šiam vaikui neįkėlėte pažymos</td>
                      )}
   {healthRecordId > 0 ? (
                      <td>
                        <button
                          className=" btn btn-light"
                          data-toggle="modal"
                          data-target={`#staticBackdrop${id}`}
                          value={id}
                        >
                          Ištrinti
                        </button>
                        <ModalComponentPdf
                          id={id}
                          firstname={firstname}
                          lastname={lastname}
                          deletePdf={this.deletePdf}
                        />
                      </td> ): <td> Šiam vaikui neįkėlėte pažymos</td>}
                    </tr>
                  );
                }
              )
            ) : (
              <div> </div>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
