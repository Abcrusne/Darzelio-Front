import React, { Component } from 'react';
import { API } from '../../Configuration/AppConfig';
import axios from 'axios';
import '../../Style/style.css';

export default class RegistrationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      role: '',
      password: '',
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        role: '',
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstname':
        errors.firstname =
          value.length < 2 ? 'Vardas turi būti ilgesnis nei 1 raidė!' : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value)
          ? ''
          : 'El.paštas netinkamas!';
        break;
      case 'lastname':
        errors.lastname =
          value.length < 2 ? 'Pavardė turi būti ilgesnė nei 1 raidė!' : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const outputUser = {
      email: this.state.email,
      firstname: this.state.firstname,
      id: this.state.id,
      lastname: this.state.lastname,
      role: this.state.role,
      password: this.state.firstname,
      // confirmlastname: this.state.confirmlastname,
    };
    const validateForm = (errors) => {
      let valid = true;
      Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
      );
      return valid;
    };

    if (validateForm(this.state.errors)) {
      axios
        .post(API + '/api/users', outputUser)
        .then((response) => {
          console.log(response);
          this.props.history.push('/admin/sekminga');
        })

        .catch((error) => {
          if (error.response.status === 400) {
            alert('Toks el.paštas jau egzistuoja! ');
          } else if (error.response.message === 'Invalid field entry') {
            alert('Įrašykite tinkamą el. paštą!');
          }
          console.log(error);
          // this.setState({error});
        });
    } else {
      console.error('Invalid Form');
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="col-lg-12 offset-lg-4">
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="firstname">
            <label htmlFor="firstname" className="col-sm-2 control-label">
              Vardas
            </label>
            <input
              type="text"
              name="firstname"
              onChange={this.handleChange}
              noValidate
            />
            {errors.firstname.length > 0 && (
              <span className="error">{errors.firstname}</span>
            )}
          </div>
          <div className="lastname">
            <label htmlFor="lastname" className="col-sm-2 control-label">
              Pavardė
            </label>
            <input
              type="text"
              name="lastname"
              onChange={this.handleChange}
              noValidate
            />
            {errors.lastname.length > 0 && (
              <span className="error">{errors.lastname}</span>
            )}
          </div>
          <div className="email">
            <label htmlFor="email" className="col-sm-2 control-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              noValidate
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.email}</span>
            )}
          </div>
          <div className="role">
            <label htmlFor="role" className="col-sm-2 control-label">
              Role
            </label>
            <select
              type="role"
              name="role"
              onChange={this.handleChange}
              noValidate
            >
              <option value=""></option>
              <option value="PARENT">Tėvas/globėjas</option>
              <option value="EDU">Švietimo specialistas</option>
            </select>
            {errors.role.length > 0 && (
              <span className="error">{errors.role}</span>
            )}
          </div>

          <div>
            <button type="submit" className="btn btn-success">
              Registruoti
            </button>
          </div>
          {/* {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'} */}
        </form>
      </div>
    );
  }
}
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import validator from 'validator';
// import { Textbox } from 'react-inputs-validation';
// import 'react-inputs-validation/lib/react-inputs-validation.min.css';
// import { API } from '../../Configuration/AppConfig';
//  import axios from 'axios';

// export default class RegistrationFormContainer extends Component {

// constructor(props) {
//   super(props);
//   this.state = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     role: "",
//     hasFirstnameError: true,
//     hasLastnameError: true,
//     hasEmailError: true,
//     hasRoleError: true,
//     firstnameErrorMsg: "",
//     lastnameErrorMsg: "",
//     emailErrorMsg: "",
//     roleErrorMsg: "",
//     isSubmitting: false
//   };

// }

// checkHasError =()=> {
//   const { isSubmitting, hasFirstnameError, hasLastnameError, hasEmailError, hasRoleError } = this.state;
//   if (isSubmitting || hasFirstnameError || hasLastnameError || hasEmailError || hasRoleError) {
//     return true;
//   } else {
//     return false;
//   }
// }

// handleFirstnameChange = (firstname, e)=> {
//   let hasFirstnameError = true;
//   let firstnameErrorMsg = "";
//   if (firstname.replace(/\s/g, "") != "") {
//     hasFirstnameError = false;
//   } else {
//     firstnameErrorMsg = "Firstname cannot be empty";
//   }
//   this.setState({ firstname, hasFirstnameError, firstnameErrorMsg });
// }

// handleLastnameChange(lastname, e) {
//   let hasLastnameError = true;
//   let lastnameErrorMsg = "";
//   if (lastname.replace(/\s/g, "") != "") {
//     hasLastnameError = false;
//   } else {
//     lastnameErrorMsg = "lastname cannot be empty";
//   }
//   this.setState({ lastname, hasLastnameError, lastnameErrorMsg });
// }

// submit=(e)=> {
//   if (this.checkHasError()) {
//     return;
//   }
//   const outputUser = {
//           email: this.state.email,
//           firstname: this.state.firstname,
//           id: this.state.id,
//           lastname: this.state.lastname,
//           role: this.state.role,
//           lastname: this.state.firstname,

//         };

//         axios
//           .post(API + '/api/users', outputUser)
//           .then((response) => {
//             console.log(response);
//             this.props.history.push('/admin/sekminga');
//           })

//           .catch((error) => {
//             if (error.response.message === 'Email already taken') {
//               alert('Toks el.paštas jau egzistuoja!');
//             } else if (error.response.message === 'Invalid field entry') {
//               alert('Įrašykite tinkamą el. paštą!');
//             }
//             console.log(error);
//             // this.setState({error});
//           });
// }

// render() {
//   const { Firstname, lastname, FirstnameErrorMsg, lastnameErrorMsg } = this.state;
//   return (
//     <div className="App">
//       <div className="container">
//         <form
//           onSubmit={
//             this.checkHasError()
//               ? e => {
//                   e.preventDefault();
//                   return;
//                 }
//               : this.submit
//           }
//         >
//           <div style={{ position: "relative" }}>
//             <div
//               style={{
//                 position: "absolute",
//                 left: "0",
//                 top: "50%",
//                 zIndex: "1",
//                 transform: "translateY(-50%)",
//                 color: "#666"
//               }}
//             >

//             </div>
//             <Textbox
//               attributesInput={{
//                 placeholder: "enter the Firstname",
//                 type: "text"
//               }}
//               customStyleWrapper={{ height: "100%" }}
//               customStyleContainer={{ height: "100%" }}
//               customStyleInput={{
//                 paddingTop: "0",
//                 paddingBottom: "0",
//                 height: "45px",
//                 paddingLeft: "20px",
//                 paddingRight: "0px",
//                 border: "none",
//                 textAlign: "right"
//               }}
//               value={Firstname}
//               onChange={this.handleFirstnameChange}
//               onBlur={() => {}}
//               validationOption={{
//                 check: false
//               }}
//             />
//             {FirstnameErrorMsg == "" ? (
//               ""
//             ) : (
//               <div className="errorMsg">{FirstnameErrorMsg}</div>
//             )}
//             <div className="border" />
//           </div>

//           <div style={{ position: "relative" }}>

//             <Textbox
//               attributesInput={{
//                 placeholder: "enter the lastname",
//                 type: "lastname"
//               }}
//               customStyleWrapper={{ height: "100%" }}
//               customStyleContainer={{ height: "100%" }}
//               customStyleInput={{
//                 paddingTop: "0",
//                 paddingBottom: "0",
//                 height: "45px",
//                 paddingLeft: "20px",
//                 paddingRight: "0px",
//                 border: "none",
//                 textAlign: "right"
//               }}
//               value={lastname}
//               onChange={this.handlelastnameChange}
//               onBlur={() => {}}
//               validationOption={{
//                 check: false
//               }}
//             />
//             {lastnameErrorMsg == "" ? (
//               ""
//             ) : (
//               <div className="errorMsg">{lastnameErrorMsg}</div>
//             )}
//             <div className="border" />
//           </div>
//           <div
//             className={`button ${
//               this.checkHasError() ? "grayButton" : "blueButton"
//             }`}
//             onClick={
//               this.checkHasError()
//                 ? e => {
//                     e.preventDefault();
//                     return;
//                   }
//                 : this.submit
//             }
//           >
//             submit
//           </div>
//           <input type="submit" className="hidden" />
//         </form>
//       </div>
//     </div>
//   );
// }
// }

// import React, { Component } from 'react';
// import { API } from '../../Configuration/AppConfig';
// import axios from 'axios';
// import RegistrationFormPresentation from './RegistrationFormPresentation';
// import ReactJoiValidations from 'react-joi-validation';
// import Joi from 'joi-browser';
// import * as EmailValidator from 'email-validator';

// // ReactJoiValidations.setJoi(Joi);

// export default class RegistrationFormContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstname: '',
//       lastname: '',
//       email: '',
//       role: '',
//       lastname: '',
//       errors: {},
//       // emailError: '',
//       // error: null
//       // confirmlastname: '',
//       // id: 0,
//     };
//   }

//   // handleValidation() {
//   //   let errors = {};
//   //   let formIsValid = true;

//   //   if (!this.state.firstname) {
//   //     formIsValid = false;
//   //     errors['firstname'] = 'negali but tuscias';
//   //   }
//   //   if (typeof this.state.firstname !== 'undefined') {
//   //     if (!this.state.firstname.match(/^[a-zA-Z]+$/)) {
//   //       formIsValid = false;
//   //       errors['firstname'] = 'Only letters';
//   //     }
//   //   }
//   //   if (!this.state.lastname) {
//   //     formIsValid = false;
//   //     errors['lastname'] = 'negali but tuscias';
//   //   }
//   //   if (typeof this.state.lastname !== 'undefined') {
//   //     if (!this.state.firstname.match(/^[a-zA-Z]+$/)) {
//   //       formIsValid = false;
//   //       errors['lastname'] = 'Only letters';
//   //     }
//   //   }
//   //   if (!this.state.email) {
//   //     formIsValid = false;
//   //     errors['email'] = 'negali but tuscias';
//   //   }

//   //   if (!EmailValidator.validate(this.state.email)) {
//   //     formIsValid = false;
//   //     errors.email = 'Invalid email address';
//   //   }
//   //   if (!this.state.role) {
//   //     formIsValid = false;
//   //     errors['role'] = 'Privaloma pasirinkti';
//   //   }
//   //   this.setState({errors: errors});
//   //          return formIsValid;
//   // }

//   handleChange = (event) => {
//     const target = event.target;
//     const value = target.value;
//     const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
//     this.setState({
//       [id]: value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     // event.target.className += ' was-validated';
//     //sitos dalies prireiks kai pats tevas gales keisti
//     // if (this.state.lastname !== this.state.confirmlastname) {
//     //   alert('Slaptažodžiai nesutampa!');
//     // } else {
//     //console.log(this.state);
//     // if(this.state.error){
//     //   alert ("egzistuoja toks el pastas")
//     // }
//     // else{

//     const outputUser = {
//       email: this.state.email,
//       firstname: this.state.firstname,
//       id: this.state.id,
//       lastname: this.state.lastname,
//       role: this.state.role,
//       lastname: this.state.firstname,
//       // confirmlastname: this.state.confirmlastname,
//     };
//     // const isValid = this.validate();
//     // if (isValid) {
//     // }
//     // if(this.handleValidation()){
//     axios
//       .post(API + '/api/users', outputUser)
//       .then((response) => {
//         console.log(response);
//         this.props.history.push('/admin/sekminga');
//       })

//       .catch((error) => {
//         if (error.response.message === 'Email already taken') {
//           alert('Toks el.paštas jau egzistuoja!');
//         } else if (error.response.message === 'Invalid field entry') {
//           alert('Įrašykite tinkamą el. paštą!');
//         }
//         console.log(error);
//         // this.setState({error});
//       });
//     // } else {
//     //   alert("Form has errors.")
//     // }
//   };

//   render() {
//     return (
//       <div>
//         <RegistrationFormPresentation
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//           firstname={this.state.firstname}
//           lastname={this.state.lastname}
//           email={this.state.email}
//           role={this.state.role}
//           lastname={this.state.lastname}
//           errors={this.state.errors}
//           // emailError={this.emailError}
//           // confirmlastname={this.state.confirmlastname}
//           // error={this.state.error}
//           {...this.state}
//         />
//       </div>
//     );
//   }
// }

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Formik, input, Form, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import { API } from '../../Configuration/AppConfig';

// // const formSchema = Yup.object().shape({
// //   firstname: Yup.string()
// //     .trim()
// //     .required('Privaloma įrašyti')
// //     .min(2, 'Vardas turi būti ilgesnis nei 1 raidė.')
// //     .matches(/^[a-z]+$/, 'Netinkamas vardo formatas'),
// //   lastname: Yup.string()
// //     .min(2, 'Pavardė turi būti ilgesnė nei 1 raidė')
// //     .required('Privaloma įrašyti')
// //     .matches(/^[a-z]+$/, 'Netinkamas pavardės formatas'),
// //   email: Yup.string()
// //     .email('Netinkamas el.pašto formatas')
// //     .required('Privaloma įrašyti'),
// //   role: Yup.string().required('Privaloma pasirinkti'),
// // });

// // export default () => {
// //   /* Server State Handling */
// //   const [serverState, setServerState] = useState();
// //   const handleServerResponse = (ok, msg) => {
// //     setServerState({ ok, msg });
// //   };
// //   const handleOnSubmit = (values, actions) => {
// //     axios({
// //       method: 'POST',
// //       url: `${API} + /api/users`,
// //       data: values,
// //     })
// //       .then((response) => {
// //         actions.setSubmitting(false);
// //         actions.resetForm();
// //         handleServerResponse(true, 'Thanks!');
// //       })
// //       .catch((error) => {
// //         actions.setSubmitting(false);
// //         handleServerResponse(false, error.response.data.error);
// //       });
// //   };
// //   return (
// //     <div>
// //       <Formik
// //         initialValues={{  firstname: '', lastname: "",email: '', role: "" }}
// //         onSubmit={handleOnSubmit}
// //         validationSchema={formSchema}
// //       >
// //         {({ isSubmitting }) => (
// //           <Form id="fs-frm" noValidate>
// // <div className="form-group">
// //         <label className="col-sm-2 control-label">
// //           <b>Vartotojo vardas</b>
// //         </label>
// //         <div className="col-sm-3">
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="firstname"
// //             placeholder="Vardas"
// //             name="firstname"
// //             // value={firstname}
// //             // onChange={handleChange}
// //             // required
// //           />
// //           <ErrorMessage
// //             name="firstname"
// //              className="errorMsg"
// //              component="p" />
// //         </div>
// //       </div>
// //       <div className="form-group">
// //         <label className="col-sm-2 control-label">
// //           <b>Vartotojo pavardė</b>
// //         </label>
// //         <div className="col-sm-3">
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="lastname"
// //             placeholder="Pavardė"
// //             name="lastname"
// //             // value={lastname}
// //             // onChange={handleChange}
// //             // required
// //           />
// //           <ErrorMessage
// //             name="lastname"
// //              className="errorMsg"
// //              component="p" />
// //         </div>
// //       </div>
// //       <div className="form-group">
// //         <label className="col-sm-2 control-label" htmlFor="email">
// //           <b>Vartotojo el.paštas</b>
// //         </label>
// //         <div className="col-sm-3">
// //           <input
// //             type="email"
// //             className=" email form-control"
// //             id="email"
// //             placeholder="el.paštas"
// //             name="email"
// //             // value={email}
// //             // onChange={handleChange}
// //             // required
// //           />
// //           <ErrorMessage
// //             name="email"
// //              className="errorMsg"
// //              component="p" />
// //         </div>
// //       </div>
// //       <div className="form-group">
// //         <label className="col-sm-2 control-label">
// //           <b>Parinkite vartotojo rolę</b>
// //         </label>
// //         <div className="col-sm-3">
// //           <select
// //             type="text"
// //             className="form-control"
// //             id="role"
// //             placeholder="Rolė"
// //             // value={role}
// //             // onChange={handleChange}
// //             // required
// //           >
// //             <option value=""></option>
// //             <option value="PARENT">Tėvas/globėjas</option>
// //             <option value="KINDERGARTEN">Švietimo specialistas</option>
// //           </select>
// //           <ErrorMessage
// //             name="role"
// //              className="errorMsg"
// //              component="p" />
// //         </div>
// //       </div>

// //             <button type="submit" disabled={isSubmitting}>
// //               Submit
// //             </button>
// //             {serverState && (
// //               <p className={!serverState.ok ? 'errorMsg' : ''}>
// //                 {serverState.msg}
// //               </p>
// //             )}
// //           </Form>
// //         )}
// //       </Formik>
// //     </div>
// //   );
// // };

// // import React, { Component } from 'react';
// // import { API } from '../../Configuration/AppConfig';
// // import axios from 'axios';
// // import RegistrationFormPresentation from './RegistrationFormPresentation';
// // import ReactJoiValidations from 'react-joi-validation';
// // import Joi from 'joi-browser';
// // import { Formik } from "formik";
// // import * as EmailValidator from "email-validator";
// // import * as Yup from "yup";
// // // ReactJoiValidations.setJoi(Joi);

// // // const handleChange = (event) => {
// // //   const target = event.target;
// // //   const value = target.value;
// // //   const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
// // //   this.setState({
// // //     [id]: value,
// // //   });
// // // };
// // //   const handleSubmit = (event) => {
// // //     event.preventDefault();

// // //     const outputUser = {
// // //       email: this.state.email,
// // //       firstname: this.state.firstname,
// // //       id: this.state.id,
// // //       lastname: this.state.lastname,
// // //       role: this.state.role,
// // //       lastname: this.state.firstname,
// // //     };
// // //     axios
// // //       .post(API + '/api/users', outputUser)
// // //       .then((response) => {
// // //         console.log(response);
// // //         this.props.history.push('/admin/sekminga');
// // //       })

// // //       .catch((error) => {
// // //         if (error.response.status >= 400) {
// // //           alert('Toks el.paštas jau egzistuoja!');
// // //         }
// // //         console.log(error);
// // //         // this.setState({error});
// // //       });
// // //   };
// // const RegistrationFormContainer= () => (

// // //   <Formik
// // //     initialValues={{ firstname: '',
// // //           lastname: '',
// // //           email: '',
// // //           role: '',
// // //           lastname: ''}}

// // //     onSubmit={(values, { setSubmitting }) => {
// // //       setTimeout(() => {
// // //         console.log("Logging in", values);
// // //         setSubmitting(false);
// // //       }, 500);
// // //     }}
// // //     // onChange= {(values, { setSubmitting }) => {
// // //     //   setTimeout(() => {
// // //     //     console.log("Logging in", values);
// // //     //     setSubmitting(false);
// // //     //   }, 500);
// // //     // }}

// //     validationSchema={Yup.object().shape({
// //       firstname: Yup.string()
// //       .trim()
// //         .required("Neirasytas vardas.")
// //         .min(2, "Vardas turi būti ilgesnis nei 1 raidė.")
// //         .matches(/^[a-z]+$/, "Netinkamas vardo formatas"),
// //         lastname: Yup.string()
// //         .required("Neirasyta pavarde.")
// //         .min(2, "Pavardė turi būti ilgesnė nei 1 raidė")
// //         .matches(/^[a-z]+$/, "Netinkamas pavardės formatas"),
// //       email: Yup.string()
// //         .email("Netinkamas el.pašto formatas")
// //         .required(""),
// //       // role: Yup.string()
// //       //   .required("requ")
// //     })}
// // //   >
// // //     )
// // //     {props => {
// // //       const {
// // //         values,
// // //         touched,
// // //         errors,
// // //         handleChange,
// // //         handleBlur,
// // //         handleSubmit
// // //       } = props;

// // //       return (

// // //         <form onSubmit={handleSubmit}>
// // //           <label htmlFor="email">vardas</label>
// // //           <input
// // //             name="firstname"
// // //             type="text"
// // //             placeholder="Enter your firstname"
// // //             value={values.firstname}
// // //             onChange={handleChange}
// // //             onBlur={handleBlur}
// // //             className={errors.firstname && touched.firstname && "error"}
// // //           />
// // //           {errors.firstname && touched.firstname && (
// // //             <div className="input-feedback">{errors.firstname}</div>
// // //           )}
// // //           <label htmlFor="email">pavarde</label>
// // //           <input
// // //             name="lastname"
// // //             type="text"
// // //             placeholder="Enter your pavarde"
// // //             value={values.lastname}
// // //             onChange={handleChange}
// // //             onBlur={handleBlur}
// // //             className={errors.lastname && touched.lastname && "error"}
// // //           />
// // //           {errors.lastname && touched.lastname && (
// // //             <div className="input-feedback">{errors.lastname}</div>
// // //           )}
// // //           <label htmlFor="email">Email</label>
// // //           <input
// // //             name="email"
// // //             type="text"
// // //             placeholder="Enter your email"
// // //             value={values.email}
// // //             onChange={handleChange}
// // //             onBlur={handleBlur}
// // //             className={errors.email && touched.email && "error"}
// // //           />
// // //           {errors.email && touched.email && (
// // //             <div className="input-feedback">{errors.email}</div>
// // //           )}

// // //           <button type="submit" >
// // //             Login
// // //           </button>
// // //         </form>
// // //       );
// // //     }}
// // //   </Formik>

// // // );

// // export default RegistrationFormContainer

// // // export default class RegistrationFormContainer extends Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       firstname: '',
// // //       lastname: '',
// // //       email: '',
// // //       role: '',
// // //       lastname: '',
// // //       // emailError: '',
// // //       // error: null
// // //       // confirmlastname: '',
// // //       // id: 0,
// // //     };
// // //   }
// // //    schema = {
// // //       firstname: Joi.string()
// // //       .trim()
// // //         .min(2)
// // //         .max(30)
// // //         .alphanum()
// // //        .required("Required"),

// // //       lastname: Joi.string()
// // //         .min(2)
// // //         .max(50)
// // //         .alphanum()
// // //         .required(),

// // //       email: Joi.string()
// // //         .email({ minDomainAtoms: 2 })
// // //         .required(),
// // //     };

// //     // validate(RegistrationFormContainer,
// //     //   { only: firstname, lastname, email, joiSchema: schema })

// //   // validate = () => {
// //   //   const result = Joi.validate(this.state.firstname, this.state.lastname,this.state.email, this.schema)
// //   //   console.log(result);
// //   // }
// //   // validate = () => {
// //   //   let emailError = '';
// //   //   if (!this.state.email.includes("@") && !this.state.email.includes(".")){
// //   //     emailError="Toks email netinkamas"
// //   //   }
// //   //   if (emailError){
// //   //     this.setState({emailError});
// //   //     return false;
// //   //   }
// //   //   return true;
// //   // };

// // //   handleChange = (event) => {
// // //     const target = event.target;
// // //     const value = target.value;
// // //     const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
// // //     this.setState({
// // //       [id]: value,
// // //     });
// // //   };

// // //   handleSubmit = (event) => {
// // //     event.preventDefault();
// // //     // this.validate();
// // //     // event.target.className += ' was-validated';
// // //     //sitos dalies prireiks kai pats tevas gales keisti
// // //     // if (this.state.lastname !== this.state.confirmlastname) {
// // //     //   alert('Slaptažodžiai nesutampa!');
// // //     // } else {
// // //     //console.log(this.state);
// // //     // if(this.state.error){
// // //     //   alert ("egzistuoja toks el pastas")
// // //     // }
// // //     // else{

// // //     const outputUser = {
// // //       email: this.state.email,
// // //       firstname: this.state.firstname,
// // //       id: this.state.id,
// // //       lastname: this.state.lastname,
// // //       role: this.state.role,
// // //       lastname: this.state.firstname,
// // //       // confirmlastname: this.state.confirmlastname,
// // //     };
// // //     // const isValid = this.validate();
// // //     // if (isValid) {
// // //     // }
// // //     axios
// // //       .post(API + '/api/users', outputUser)
// // //       .then((response) => {
// // //         console.log(response);
// // //         this.props.history.push('/admin/sekminga');
// // //       })

// // //       .catch((error) => {
// // //         if (error.response.status >= 400) {
// // //           alert('Toks el.paštas jau egzistuoja!');
// // //         }
// // //         console.log(error);
// // //         // this.setState({error});
// // //       });
// // //   };

// // //   render() {
// // //     return (
// // //       <div>
// // //         <RegistrationFormPresentation
// // //           handleChange={this.handleChange}
// // //           handleSubmit={this.handleSubmit}
// // //           firstname={this.state.firstname}
// // //           lastname={this.state.lastname}
// // //           email={this.state.email}
// // //           role={this.state.role}
// // //           lastname={this.state.lastname}
// // //           // emailError={this.emailError}
// // //           // confirmlastname={this.state.confirmlastname}
// // //           // error={this.state.error}
// // //           {...this.state}
// // //         />
// // //       </div>
// // //     );
// // //   }
// // // }
