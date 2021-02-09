import React from 'react';

const ModalComponent = ({ id, email, deleteUser }) => {
  console.log(" id: " + id);
  return (
    <div
      className="modal fade"
      id={`staticBackdrop${id}`}
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
            Ar tikrai norite ištrinti vartotoją?
          </div>
          <div className="modal-footer">
            <button
          
              onClick={deleteUser}
              type="button"
              data-toggle="modal"
              className="btn btn-primary"
              data-dismiss="modal"
              value={id}
            >
             Taip
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Ne
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
