import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import KindergartenTablePresentation from './KindergartenTablePresentation';
import Loading from '../Loading/Loading';

export default class KindergartenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: '',
      kindergartens: [],
    };
  }

  // handleInputChange = event => {
  //   const query = event.target.value;

  //   this.setState(prevState => {
  //     const filteredKindergartens = prevState.data.filter(element => {
  //       return element.name.toLowerCase().includes(query.toLowerCase());
  //     });

  //     return {
  //       query,
  //       filteredKindergartens
  //     };
  //   });
  // };

  componentDidMount() {
    //console.log('component did mount kindergartens');

    axios
      .get(`${API}/api/kindergartens/admission/queues`)
      // .get(
      //   `${API}/api/kindergartens/admissions/${this.props.match.params.id}/queues`
      // )
      .then((res) => {
        this.setState({
          // id: this.props.match.params.id,
          kindergartens: res.data,
        });
        // console.log('admission id: ' + this.state.id);
      })
      .catch((err) => console.log(err));
  }

  // handleConfirm = (event) => {
  //   event.preventDefault();

  //   this.setState({
  //     confirm: true,
  //   });
  //   const confirmation = {
  //     confirm: this.state.confirm,
  //   };
  //   // ar tiesiog:
  //   // const confirmation = {
  //   //     confirm: true,
  //   //   };
  //   axios.post(
  //     `${API}/api/kindergartens/admissions/${this.state.admissionId}/queues/${event.target.value}/confirm`,
  //     confirmation
  //   );
  // };

  render() {
    return (
      <div>
        {this.state.kindergartens.length > 0 ? (
          <KindergartenTablePresentation
            kindergartens={this.state.kindergartens}
            // admissionId={this.state.id}

            // handleConfirm={this.handleConfirm}
          />
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    );
  }
}
