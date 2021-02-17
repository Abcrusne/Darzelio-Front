// import React, {useState, useEffect} from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Select from 'react-select';
// import UserService from "../../Configuration/UserService";
import { API } from '../../Configuration/AppConfig';
import '../../Style/ParentLanding.css';
// import MainRegistrationPresentation from "./MainRegistrationPresentation";

class MainRegistrationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      childId: 0,
      firstname: '',
      lastname: '',
      kindergartens: [],
      kindergarten_name: '',
      firstPriority: '',
      secondPriority: '',
      thirdPriority: '',
      fourthPriority: '',
      fifthPriority: '',
    };
  }

  getKindergartens = async () => {
    try {
      const { data } = await axios.get(`${API}/api/kindergartens`, {
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  getChildren = async () => {
    try {
      const { data } = await axios.get(
        `${API}/api/users/getloggeduserchildren`
      );
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  async componentDidMount() {
    const kindergartensData = await this.getKindergartens();
    const childrenData = await this.getChildren();
    console.log(kindergartensData);
    console.log(childrenData);
    let kindergartens = kindergartensData.map((kindergarten) => ({
      name: kindergarten.name,
      id: kindergarten.id,
    }));
    let children = childrenData.map((child) => ({
      firstname: child.firstname,
      lastname: child.lastname,
      id: child.id,
    }));
    this.setState({
      kindergartens: kindergartens,
      children: children,
    });
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]:
        event.target.name === 'childId'
          ? parseInt(event.target.value, 10)
          : event.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let state = this.state;

    const dataLoad = {
      childId: state.childId,
      firstPriority: state.firstPriority,
      secondPriority: state.secondPriority,
      thirdPriority: state.thirdPriority,
      fourthPriority: state.fourthPriority,
      fifthPriority: state.fifthPriority,
      id: 0,
    };
    console.log(dataLoad);

    if (
      dataLoad.childId &&
      dataLoad.firstPriority &&
      dataLoad.firstPriority.length > 0
    ) {
      axios
        .post(`${API}/api/kindergartens/register`, dataLoad)
        .then((response) => {
          alert('Registracija sėkminga!');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Patikrinkite ar visi duomenys teisingi!');
    }
  };
  render() {
    const { kindergartens, children } = this.state;

    // const selectedKindergartens = Object.values(priorities);
    // const firstPriorityOptions = kindergartens.filter(
    //     kindergarten => !selectedKindergartens.find(sK => sK === kindergarten.name) ||
    //         kindergarten.name === priorities.firstPriority
    // );
    // const secondPriorityOptions = kindergartens.filter(
    //     kindergarten => !selectedKindergartens.find(sK => sK === kindergarten.name) ||
    //         kindergarten.name === priorities.secondPriority
    // );
    // const thirdPriorityOptions = kindergartens.filter(
    //     kindergarten => !selectedKindergartens.find(sK => sK === kindergarten) ||
    //         kindergarten === priorities.thirdPriority
    // );
    // const fourthPriorityOptions = kindergartens.filter(
    //     kindergarten => !selectedKindergartens.find(sK => sK === kindergarten) ||
    //         kindergarten === priorities.fourthPriority
    // );
    // const fifthPriorityOptions = kindergartens.filter(
    //     kindergarten => !selectedKindergartens.find(sK => sK === kindergarten) ||
    //         kindergarten === priorities.fifthPriority
    // );

    return (
      <form
        className="col-lg-5 shadow p-3 mt-5 bg-white rounded"
        onSubmit={this.handleSubmit}
      >
        <div className="mb-3">
          <h4>Vaiko registracijos į darželį forma</h4>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="selectChild">
            Vaikas
          </label>
          <select
            className="form-control"
            id="selectChild"
            onChange={this.handleChange}
            name="childId"
          >
            <option selected>Pasirinkite vaiką</option>
            {children &&
              children.length > 0 &&
              children.map((child) => (
                <option key={child.id} value={child.id}>
                  {child.firstname + ' ' + child.lastname}{' '}
                  {console.log(child.id)}
                </option>
              ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="selectKindergarten1">
            I prioriteto darželis
          </label>
          <select
            className="form-control"
            id="selectKindergarten1"
            onChange={this.handleChange}
            name="firstPriority"
          >
            <option selected>Pasirinkite darželį</option>
            {kindergartens &&
              kindergartens.length > 0 &&
              kindergartens.map((kindergarten, i) => (
                <option value={kindergarten.name} key={i}>
                  {kindergarten.name}
                </option>
              ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="selectKindergarten2">
            II prioriteto darželis
          </label>
          <select
            className="form-control"
            id="selectKindergarten2"
            name="secondPriority"
            onChange={this.handleChange}
          >
            <option selected>Pasirinkite darželį</option>
            {kindergartens.map((kindergarten, i) => (
              <option key={i} value={kindergarten.name}>
                {kindergarten.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="selectKindergarten3">
            III prioriteto darželis
          </label>
          <select
            className="form-control"
            id="selectKindergarten3"
            name="thirdPriority"
            onChange={this.handleChange}
          >
            <option selected>Pasirinkite darželį</option>
            {kindergartens.map((kindergarten, i) => (
              <option key={i} value={kindergarten.name}>
                {kindergarten.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="selectKindergarten4">
            IV prioriteto darželis
          </label>
          <select
            className="form-control"
            id="selectKindergarten4"
            name="fourthPriority"
            onChange={this.handleChange}
          >
            <option selected>Pasirinkite darželį</option>
            {kindergartens.map((kindergarten, i) => (
              <option key={i} value={kindergarten.name}>
                {kindergarten.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="selectKindergarten5">
            V prioriteto darželis
          </label>
          <select
            className="form-control"
            id="selectKindergarten5"
            name="fifthPriority"
            onChange={this.handleChange}
          >
            <option selected>Pasirinkite darželį</option>
            {kindergartens.map((kindergarten, i) => (
              <option key={i} value={kindergarten.name}>
                {kindergarten.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="mr-4 btn">
          Pateikti
        </button>
      </form>
    );
  }
}
export default withRouter(MainRegistrationContainer);

//      )
// };
// export default MainRegistrationContainer;
