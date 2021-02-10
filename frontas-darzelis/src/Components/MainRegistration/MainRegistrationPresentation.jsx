import React from "react";

const MainRegistrationPresentation = () => {
    return (
        <div>
            <div className="input-group mb-3">
                <select className="form-select-kids" aria-label="kids selection">
                    <option selected>Pasirinkite vaiką</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <select className="form-select-calendar" aria-label="Default select example">
                    <option selected>Data, kada pradės lankyti darželį</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Jūsų statusas vaiko atžvilgiu</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioStatus1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Mama/Tėvas
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioStatus2"
                           checked/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Globėja/Globėjas
                    </label>
                </div>
            </div>
            <div className="input-group mb-3">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Pasirinkite darželį</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    )
};
export default MainRegistrationPresentation