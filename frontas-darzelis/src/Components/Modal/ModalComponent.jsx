import React from 'react';

const ModalComponent = ({ userId, email, deleteUser }) => {
  console.log(" id: " + userId);

  return (
    <div
      className="modal fade"
      id={`staticBackdrop${userId}`}
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {email}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
           Tikrai norite ištrinti šį vartotoją?
          </div>
          <div className="modal-footer">
            <button
              onClick={deleteUser}
              type="button"
              data-toggle="modal"
              className="btn btn-danger"
              data-dismiss="modal"
              value={userId}
            >
             Taip
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Atšaukti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

//   return (
//     <div  className="modal fade" id ={`exampleModal${userId}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">{email}</h5>
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="modal-body">
//        Ar tikrai norite ištrinti?
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-dismiss="modal">Ne</button>
//         <button type="button" className="btn btn-primary" value={userId} onClick={deleteUser}>Taip</button>
//       </div>
//     </div>
//   </div>
// </div>



//   );
// };

export default ModalComponent;
    
    // <div
    //   classNameName="modal fade"
    //   id={`staticBackdrop${userId}`}
    //   data-backdrop="static"
    //   data-keyboard="false"
    //   tabIndex="-1"
    //   aria-labelledby="staticBackdropLabel"
    //   aria-hidden="true"
    // >
    //   <div classNameName="modal-dialog modal-dialog-centered">
    //     <div classNameName="modal-content">
    //       <div classNameName="modal-header">
    //         <h5 classNameName="modal-title" id="staticBackdropLabel">
    //           {email}
    //         </h5>
    //         <button
    //           type="button"
    //           classNameName="close"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div classNameName="modal-body">
    //         Ar tikrai norite ištrinti šį vartotoją?
    //       </div>
    //       <div classNameName="modal-footer">
    //         <button
    //           onClick={deleteUser}
    //           type="button"
    //           data-toggle="modal"
    //           classNameName="btn btn-primary"
    //           // data-dismiss="modal"
    //           value={userId}
    //         >
    //          Taip
    //         </button>
    //         <button
    //           type="button"
    //           classNameName="btn btn-secondary"
    //           data-dismiss="modal"
    //         >
    //           Ne
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>