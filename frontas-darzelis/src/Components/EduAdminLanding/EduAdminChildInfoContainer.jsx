import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import EduAdminChildInfoPresentation from './EduAdminChildInfoPresentation';

export default class EduAdminChildInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //childInfo and parentInfo
      childId: '',
      mainParentFirstname: '',
      mainParentLastname: '',
      mainParentEmail: '',
      mainParentPhone: '',
      mainParentAddress: '',
      mainParentNumberOfKids: '',
      mainParentStudying: '',
      mainParentStudyingInstitution: '',
      mainParentDisabled: '',
      childFirstname: '',
      childLastname: '',
      childAddress: '',
      childAdopted: '',
      secondParent: '',
      secondParentFirstname: '',
      secondParentLastname: '',
      secondParentNumberofKids: '',
      secondParentStudying: '',
      secondParentStudyingInstitution: '',
      secondParentDisabled: '',

      //application info
      // "childId": 0,
      fifthPriority: '',
      firstPriority: '',
      fourthPriority: '',
      //registracijos id
      id: 0,
      rating: 0,
      secondPriority: '',
      thirdPriority: '',
    };
  }

  componentDidMount() {
    console.log('component did mount ');
    axios
      .get(
        `${API}/api/kindergartens/admission/registrations/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          childId: this.props.match.params.id,
          mainParentFirstname: res.data.mainParentFirstname,
          mainParentLastname: res.data.mainParentLastname,
          mainParentEmail: res.data.mainParentEmail,
          mainParentPhone: res.data.mainParentPhone,
          mainParentAddress: res.data.mainParentAddress,
          mainParentNumberOfKids: res.data.mainParentNumberOfKids,
          mainParentStudying: res.data.mainParentStudying,
          mainParentStudyingInstitution: res.data.mainParentStudyingInstitution,
          mainParentDisabled: res.data.mainParentDisabled,
          childFirstname: res.data.childFirstname,
          childLastname: res.data.childLastname,
          childAddress: res.data.childAddress,
          childAdopted: res.data.childAdopted,
          secondParent: res.data.secondParent,
          secondParentFirstname: res.data.secondParentFirstname,
          secondParentLastname: res.data.secondParentLastname,
          secondParentNumberofKids: res.data.secondParentNumberofKids,
          secondParentStudying: res.data.secondParentStudying,
          secondParentStudyingInstitution:
            res.data.secondParentStudyingInstitution,
          secondParentDisabled: res.data.secondParentDisabled,
        })
    
      axios
      .get(
        `${API}/api/kindergartens/register/${this.props.match.params.id}`
      );
    } )
    .then((res)=>{
      this.setState({
        fifthPriority: res.data.fifthPriority,
        firstPriority: res.data.firstPriority,
        fourthPriority: res.data.fourthPriority,
        id: res.data.id,
        rating: res.data.rating,
        secondPriority: res.data.secondPriority,
        thirdPriority: res.data.thirdPriority,

      })
    })
      .catch((err) => console.log(err));
    // console.log();
  }

  render() {
    return (
      <div>
        <EduAdminChildInfoPresentation
          childId={this.state.childId}
          mainParentFirstname={this.state.mainParentFirstname}
          mainParentLastname={this.state.mainParentLastname}
          mainParentEmail={this.state.mainParentEmail}
          mainParentPhone={this.state.mainParentPhone}
          mainParentAddress={this.state.mainParentAddress}
          mainParentNumberOfKids={this.state.mainParentNumberOfKids}
          mainParentStudying={this.state.mainParentStudying}
          mainParentStudyingInstitution={
            this.state.mainParentStudyingInstitution
          }
          mainParentDisabled={this.state.mainParentDisabled}
          childFirstname={this.state.childFirstname}
          childLastname={this.state.childLastname}
          childAddress={this.state.childAddress}
          childAdopted={this.state.childAdopted}
          secondParent={this.state.secondParent}
          secondParentFirstname={this.state.secondParentFirstname}
          secondParentLastname={this.state.secondParentLastname}
          secondParentNumberofKids={this.state.secondParentNumberofKids}
          secondParentStudying={this.state.secondParentStudying}
          secondParentStudyingInstitution={
            this.state.secondParentStudyingInstitution
          }
          secondParentDisabled={this.state.secondParentDisabled}
          fifthPriority= {this.state.fifthPriority}
          firstPriority= {this.state.firstPriority}
          fourthPriority= {this.state.fourthPriority}
          id= {this.state.id}
          rating= {this.state.rating}
          secondPriority= {this.state.secondPriority}
          thirdPriority= {this.state.thirdPriority}

        />
      </div>
    );
  }
}
