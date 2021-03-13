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

  DeleteData = () => {
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
  handleChange =(event)=> {
  
      this.setState({ [event.target.name]: event.target.checked });
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="col-lg-8 m-auto shadow p-3 mb-5 bg-white rounded">
        <h4 className="mb-5"> Paskyros ištrinimas</h4>
          <div className="mb-4">
            <div>
              <button className="btn ml-2"
              //  onClick={this.DeleteData}
              data-toggle="modal"
              data-target={`#staticBackdrop`}
              >
                Ištrinti mano paskyrą 
              </button>
              <ModalDeleteUserData
              deleteData={this.DeleteData}
              />
            </div>
            <form className=" p-3 mt-2 mb-3 " onSubmit={this.handleSubmit}>
              
            <div className="form-check form-group mb-3 col-12">
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
            <button type="submit" className="btn"> Pateikti</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
