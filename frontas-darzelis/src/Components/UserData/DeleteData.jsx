import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import '../../Style/style.css';
import ModalDeleteUserData from '../Modal/ModalDeleteUserData';
import ModalEverything from '../Modal/ModalEverything';

export default class DeleteData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      // eraseData: true,
    };
  }
  componentDidMount = () => {
    axios
      .get(`${API}/api/users/loggeduserid`)
      .then((res) => {
        this.setState({
          userId: res.data,
        });
      })
    // .catch((err) => console.log(err));
    .catch((err) =>  {});
  };
  DeleteData = () => {
    axios
      .delete(`${API}/api/users/delete`, {
        params: {
          eraseData: false,
        },
      })
      .then((res) => {
        alert('Jūsų paskyra ištrinta visam laikui!');
        localStorage.clear();
        this.props.history.push('/login');
      })
  // .catch((err) => console.log(err));
  .catch((err) =>  {});
    // console.log('delete');
  };
  //galima ir su eraseData true bet del ID modalui siuo budu padariau
  deleteEverything = () => {
    axios
      .delete(`${API}/api/users/${this.state.userId}`)
      .then((res) => {
        alert('Jūsų paskyra ir duomenys ištrinti visam laikui!');
        localStorage.clear();
        this.props.history.push('/login');
      })
      // .catch((err) => console.log(err));
      .catch((err) =>  {});
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="col-lg-8 m-auto shadow p-3 mb-5 bg-white rounded">
          <h4 className="mb-5"> Paskyros ištrynimas</h4>
          <div className="mb-4">
            <div>
              <button
                className="btnData btn btn-light mb-4"
                // onClick={this.DeleteData}
                data-toggle="modal"
                data-target={`#staticBackdrop`}
              >
                Ištrinti mano paskyrą
              </button>
              <ModalDeleteUserData deleteData={this.DeleteData} />
            </div>

            <div>
            <button className="btnData btn btn-light " 
               data-toggle="modal"
               data-target={`#staticBackdrop${this.state.userId}`}
               value={this.state.userId}
          
            >
              Ištrinti mano paskyrą ir duomenis
            </button>
            <ModalEverything 
            deleteEverything={this.deleteEverything}
            userId={this.state.userId}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
