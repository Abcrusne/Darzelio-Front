import React from 'react';

const UploadPdfPresentation = (handleSubmit, handleChange) => {
  return (
    <div className="container mt-5 shadow p-3 mb-5 bg-white rounded">
      <div className="mb-4">
        <h3>Įkelkite vaiko PDF formatu pažymas</h3>
      </div>
      <form onSubmit={handleSubmit} className="form-row ">
        <div className="mb-3">
          <label htmlFor="" className="control-label">
            Parinkite vaiką*:
          </label>
          <select
            type="text"
            className="form-control"
            name=""
            onChange={handleChange}

            //required
          >
            <option value=""></option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="control-label">
            Parinkite dokumento pavadinimą*:
          </label>
          <select
            type="text"
            className="form-control"
            name="title"
            onChange={handleChange}

            //required
          >
            <option value=""></option>
            <option value="Sveikatos medicinos pažyma">
              Sveikatos medicinos pažyma
            </option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="pdf" className="control-label">
            Įkelti dokumentą*:
          </label>
          <input
            type="file"
            className="form-control"
            name="pdl"
            onChange={handleChange}

            //required
          />
        </div>
      </form>
    </div>
  );
};

export default UploadPdfPresentation;
