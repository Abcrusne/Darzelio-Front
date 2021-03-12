import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import '../../Style/style.css';
import ModalDeleteUserData from '../Modal/ModalDeleteUserData';

export default class DeleteData extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // eraseData: true,
    };
  }

  //    headers = {
  //     'Authorization': 'Bearer paperboy'
  //   }
  //  data = {
  //     eraseData: true
  //   }
  DeleteData = () => {
    //   var kkk = {
    //     "eraseData": true
    // }
    axios
      .delete(`${API}/api/users/delete`, {
     params: {
       eraseData: true
     }
      }).then((res)=>{
        alert("Jūsų paskyra ištrinta visam laikui!")
        localStorage.clear();
        this.props.history.push('/login');
      })
      .catch((err) => console.log(err));
    console.log('delete');
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="col-lg-5 m-auto shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h4>Paskyros ištrinimas</h4>
            <div>
              <button className="btn"
              //  onClick={this.DeleteData}
              data-toggle="modal"
              data-target={`#staticBackdrop`}
          
              >
                Ištrinti paskyrą ir mano duomenis
              </button>
              <ModalDeleteUserData
              deleteData={this.DeleteData}
              />
            </div>

            <div className="form-check form-group mb-3 col-10">
              <input
                type="checkbox"
                className="form-check-input"
                name="markedForDeletion"
                id="markedForDeletion"
                checked={this.state.markedForDeletion}
                onChange={this.handleChange}
                noValidate
              />
              <label htmlFor="markedForDeletion" className="form-check-label">
                Pažymėkite jei norite, kad Jūsų anketa ir duomenys būtų ištrinti
                iš sistemos
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
