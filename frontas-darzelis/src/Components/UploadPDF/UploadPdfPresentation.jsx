import React from 'react';

const UploadPdfPresentation = (handleSubmit, handleChange , children, pdf, title) => {
    console.log(children);
//   return (
//     <div className="container mt-5 shadow p-3 mb-5 bg-white rounded">
//       <div className="mb-4">
//         <h3>Įkelkite vaiko PDF formatu pažymas</h3>
//       </div>
//       <form onSubmit={handleSubmit} className="form-row ">
//         <div className="form-group mb-3 col-6">
//           <label htmlFor="selectChild" className="control-label">
//             Parinkite vaiką*:
//           </label>
//           <select
            
//             className="form-control"
//             id="selectChild"
//             name="childId"
//             onChange={handleChange}

//             //required
//           >
//               {/* <option defaultValue>-</option> */}
//             <option value=""> </option>
//             {/* {children.map((child) => (
//                                     <option
//                                         key={child.id}
//                                         value={child.id}
//                                     >{child.firstname + ' ' + child.lastname}
//                                     </option>
//                                 ))} */}
//           </select>
//         </div>
//         <div className="form-group mb-3 col-6">
//           <label htmlFor="" className="control-label">
//             Parinkite dokumento pavadinimą*:
//           </label>
//           <select
//             type="text"
//             className="form-control"
//             name="title"
//             onChange={handleChange}

//             //required
//           >
//             <option value=""></option>
//             <option value="Sveikatos medicininė pažyma">
//               Sveikatos medicininė pažyma
//             </option>
//           </select>
//         </div>
//         <div className="form-group mb-3 col-12">
//           <label htmlFor="pdf" className="control-label">
//             Įkelti dokumentą*:
//           </label>
//           <input
//             type="file"
//             accept=".pdf"
//             className="form-control"
//             name="pdl"
//             onChange={handleChange}

//             //required
//           />
//         </div>
//         <div className="form-group mb-3 col-12" > * - privalomi laukai</div>
//         <div>
//               <button type="submit" className="btn btn-success">
//                 Įkelti
//               </button>
//             </div>
//       </form>
//     </div>
//   );
};

export default UploadPdfPresentation;
