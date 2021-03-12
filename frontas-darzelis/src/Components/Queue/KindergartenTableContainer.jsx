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

  componentDidMount() {
    axios
      .get(`${API}/api/kindergartens/admission/queues`)

      .then((res) => {
        this.setState({
          kindergartens: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.kindergartens.length > 0 ? (
          <KindergartenTablePresentation
            kindergartens={this.state.kindergartens}
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
