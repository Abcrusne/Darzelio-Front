import axios from 'axios';
import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import '../../Style/style.css';
//import UploadPdfPresentation from './UploadPdfPresentation';

axios.defaults.withCredentials = true; // leidžia dalintis cookies

export default class UploadPdfContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      //child id
      id: 0,
      firstname: '',
      lastname: '',
      pdf: '',
      // title: 'Sveikatos pažyma',
    };
  }
  //   componentDidMount() {
  //     console.log('component did mount');
  //     axios.get(`${API}/api/users/getloggeduserchildren`).then((res) => {
  //       this.setState({
  //         children: res.data,
  //         // id: res.data.id,
  //         // firstname: res.data.firstname,
  //         // lastname: res.data.lastname
  //       });
  //       console.log("children "+ this.state.children);
  //     });
  //   }
  getChildren = async () => {
    try {
      const { data } = await axios.get(
        `${API}/api/users/getloggeduserchildren`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  async componentDidMount() {
    const childrenData = await this.getChildren();
    // console.log(childrenData);
    let children = childrenData.map((child) => ({
      firstname: child.firstname,
      lastname: child.lastname,
      id: child.id,
    }));
    this.setState({
      children: children,
    });
  }

  handleChange = (event) => {
    this.setState({
      id: event.target.value,
    });
    // this.setState({
    //         ...this.state,
    //         [event.target.name]: event.target.name === "childId"
    //             ? parseInt(event.target.value, 10)
    //             : (event.target.value === '-' ? '' : event.target.value)
    //     }
    // )
  };

  handleFile = (event) => {
    //console.log(event.target.files +"files");
    //console.log(event.target.files[0] +"files[0]");
    this.setState({ pdf: event.target.files[0] });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let data = new FormData();
    data.append('data', this.state.pdf);
    data.append('id', this.state.id);
    axios
      .post(`${API}/api/users/pdf`, data)
      .then((res) => {
        console.log(res);
        alert('PDF įkeltas.');
        this.props.history.push('/tevai');
      })
      .catch((error) => {
        console.log(error.data);
        if (error.response.data === 'Blogas failo formatas') {
          alert('Pasitikrinkite ar įkėlėte tinkamo pdf formato failą.');
        } else if (error.response.status === 400) {
          alert(
            'Nesėkmingas pdf įkelimas. Pasitikrinkite ar pažymėjote vaiką bei pasirinkote pdf failą.'
          );
        }
      });
  };

  render() {
    return (
      <div>
        {/* {this.state.children.map((child) => {
          return ( */}
        {/* <UploadPdfPresentation
              children={this.state.children}
            //  id= {child.id}
            //   key={child.id}
              // firstname= {this.state.firstname}
              // lastname={this.state.lastname}
              pdf={this.state.pdf}
              title={this.state.title}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            /> */}
        {/* ); */}
        {/* })} */}

        <div className="container mt-5 shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h3>Įkelkite vaiko sveikatos pažymą PDF formatu</h3>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className="form-row"
            encType="multipart/form-data"
          >
            <div className="form-group mb-3 col-4">
              <label htmlFor="selectChild" className="control-label">
                Pasirinkite vaiką*:
              </label>
              <select
                className="form-control"
                id="selectChild"
                name="childId"
                onChange={this.handleChange}
                required
                onInvalid={(e) => {
                  e.target.setCustomValidity('Pasirinkite vaiką.');
                }}
                onInput={(e) => e.target.setCustomValidity('')}
              >
                {/* <option defaultValue>-</option> */}
                <option value=""> </option>
                {this.state.children.map((child) => (
                  <option key={child.id} value={child.id}>
                    {child.firstname + ' ' + child.lastname}
                  </option>
                ))}
              </select>
            </div>
            <div className=" fileUpload form-group mt-4 ml-1 mb-1 col-12">
              <label htmlFor="pdf" className="upload control-label">
                Įkelti dokumentą*
              </label>
              <input
                type="file"
                accept=".pdf"
                className=" file form-control"
                name="pdf"
                id="pdf"
                onChange={this.handleFile}
                // onChange={(e)=>this.handleFile(e)}
                // style={{width: "90px"}}
                //&&{style ={{"width: "100%"}}

                required
                onInvalid={(e) => {
                  e.target.setCustomValidity('Įkelkite pažymą.');
                }}
                onInput={(e) => e.target.setCustomValidity('')}
              />
                <p className="mt-1">
                  <b>{this.state.pdf.name} </b>
                </p>
            
            </div>
            <div className="form-group mb-3 col-12"> * - privalomi laukai</div>
            <div>
              <button type="submit" className="btn btn-success">
                Įkelti
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
