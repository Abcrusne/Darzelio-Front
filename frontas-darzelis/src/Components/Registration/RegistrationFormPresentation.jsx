
//KOL KAS VISKAS VIENAM FORM CONTAINER'I
//REIKES PERKELT CIA

// import React from 'react';
// import { Link } from 'react-router-dom';
// import validator from 'validator';
// import { Textbox } from 'react-inputs-validation';
// import 'react-inputs-validation/lib/react-inputs-validation.min.css';
// //import RegistrationSuccessPresentation from './RegistrationSuccessPresentation';

// function RegistrationFormPresentation({
//   handleChange,
//   handleSubmit,
//   firstname,
//   lastname,
//   email,
//   role,
//   password,
//   errors,
//   // emailError,
//   // confirmPassword,
//   // error,
//   ...otherProps
// }) {
//   // if (error){
//   //   return <div>Error: {error.message} Toks el.paštas jau egzistuoja.</div>;
//   // } else {
//   return (
//     <form className="col-lg-12 offset-lg-4 " onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label className="col-sm-2 control-label">
//           <b>Vartotojo vardas</b>
//         </label>
//         <div className="col-sm-3">
//           <input
//             type="text"
//             className="form-control"
//             id="firstname"
//             placeholder="Vardas"
//             value={firstname}
//             onChange={handleChange}
//             // required
//           />
//           <div> {errors['name']}</div>
//           {/* <div className="invalid-feedback">Įrašykite vardą.</div>
//           <div className="valid-feedback"></div> */}
//         </div>
//       </div>
//       <div className="form-group">
//         <label className="col-sm-2 control-label">
//           <b>Vartotojo pavardė</b>
//         </label>
//         <div className="col-sm-3">
//           <input
//             type="text"
//             className="form-control"
//             id="lastname"
//             placeholder="Pavardė"
//             value={lastname}
//             onChange={handleChange}
//             required
//           />
//           {/* <div className="invalid-feedback">Įrašykite pavardę.</div>
//           <div className="valid-feedback"></div> */}
//         </div>
//       </div>
//       <div className="form-group">
//         <label className="col-sm-2 control-label" htmlFor="email">
//           <b>Vartotojo el.paštas</b>
//         </label>
//         <div className="col-sm-3">
//           <input
//             type="email"
//             className=" email form-control"
//             id="email"
//             placeholder="el.paštas"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//           {/* <div className="invalid-feedback">Įrašykite el.paštą.</div>
//           <div className="valid-feedback"></div> */}
//           {/* {emailError ? { emailError } : null} */}
//         </div>
//       </div>
//       {/* <div className="form-group">
//         <label className="col-sm-2 control-label">
//           <b>Slaptažodis</b>
//         </label>
//         <div className="col-sm-3">
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//       </div> */}
//       {/* <div className="form-group">
//         <label className="col-sm-2 control-label">
//           <b>Patvirtinkite slaptažodį</b>
//         </label>
//         <div className="col-sm-3">
//           <input
//             type="password"
//             className="form-control"
//             id="confirmPassword"
//             placeholder="Confirm password"
//             value={confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//       </div> */}
//       <div className="form-group">
//         <label className="col-sm-2 control-label">
//           <b>Parinkite vartotojo rolę</b>
//         </label>
//         <div className="col-sm-3">
//           <select
//             type="text"
//             className="form-control"
//             id="role"
//             placeholder="Role"
//             value={role}
//             onChange={handleChange}
//             required
//           >
//             <option value=""></option>
//             <option value="PARENT">Tėvas/globėjas</option>
//             <option value="KINDERGARTEN">Švietimo specialistas</option>
//           </select>
//           {/* <div className="invalid-feedback">Pasirinkite rolę.</div>
//           <div className="valid-feedback"></div> */}
//         </div>
//       </div>
//       <div className="form-group">
//         <Link to={'/admin'} className="btn btn-default">
//           Grįžti į pradinį puslapį
//         </Link>
//         <button type="submit" className="btn btn-success">
//           Registruotis
//         </button>
//       </div>
//     </form>
//   );
// }
// // }
// export default RegistrationFormPresentation;
