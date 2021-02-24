import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import KindergartenTable from './KindergartenTablePresentation';

export default class KindergartenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admissionId: '',
      confirm: false,
      kindergartens: [],
    };
  }

  componentDidMount() {
    console.log('component did mount');
    axios
      .get(
        `${API}/api/kindergartens/admissions/${this.props.match.params.admissionId}`
      )
      .then((res) => {
        this.setState({
          admissionId: res.data.id,
        //   active: res.data.active,
        //   allQueuesConfirmed: res.data.,
        //   endDate: res.data.endDate',
        //   registrationCount: res.data.registrationCount,
        //   startDate: res.data.startDate,
        //   totalSpotsInKindergartens: res.data.totalSpotsInKindergartens,
        });
        console.log('admission id: ' + this.state.admissionId);
        return axios.get(
          `${API}/api/kindergartens/admissions/${this.state.admissionId}/queues`
        );
      })
      .then((res) => {
        this.setState({
          kindergartens: res.data,
        });
        // return axios.get(
        //   `${API}/api/kindergartens/admissions/${this.state.admissionId}/queues`
        // );
      })
      //   .then((res) => {
      //     this.setState({
      //       queueId: res.data.id,
      //     });
      //   })
      .catch((err) => console.log(err));
  }

  handleConfirm = (event) => {
    event.preventDefault();

    this.setState({
      confirm: true,
    });
    const confirmation = {
      confirm: this.state.confirm,
    };
    // ar tiesiog:
    // const confirmation = {
    //     confirm: true,
    //   };
    axios.post(
      `${API}/api/kindergartens/admissions/${this.state.admissionId}/queues/${event.target.value}/confirm`,
      confirmation
    );
  };

  render() {
    return (
      <div>
        <KindergartenTable
          kindergartens={this.state.kindergartens}
          admissionId={this.state.admissionId}
          handleConfirm={this.handleConfirm}
        />
      </div>
    );
  }
}
