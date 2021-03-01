import React from 'react';
import { Link } from 'react-router-dom';

const EduAdminChildInfoPresentation = () => {
  // const mokosi =
  // studying === true
  //   ? 'Taip'
  //   : studying === false
  //   ? 'Ne'
  //   : 'Nenurodyta';

  // const nedarbingumas =
  // hasDisability === true
  //   ? 'Taip'
  //   : hasDisability === false
  //   ? 'Ne'
  //   : 'Nenurodyta';

  // const deklaruotaVietaSutampa =
  // declaredResidenceSameAsLiving === true
  //   ? 'Taip'
  //   : declaredResidenceSameAsLiving === false
  //   ? 'Ne'
  //   : 'Nenurodyta';

  // const ivaikintas =
  // adopted === true
  //   ? 'Taip'
  //   : adopted === false
  //   ? 'Ne'
  //   : 'Nenurodyta';

  // const mokosiAntrasis =
  // secondParentStudying === true
  //   ? 'Taip'
  //   : secondParentStudying === false
  //   ? 'Ne'
  //   : 'Nenurodyta';

  // const nedarbingumasAntrasis =
  // secondParentHasDisability === true
  //   ? 'Taip'
  //   : secondParentHasDisability === false
  //   ? 'Ne'
  //   : 'Nenurodyta';

  // const deklaruotaVietaSutampa =
  // secondParentDeclaredResidenceSameAsLiving === true
  //   ? 'Taip'
  //   : secondParentDeclaredResidenceSameAsLiving === false
  //   ? 'Ne'
  //   : 'Nenurodyta';
  return (
    <div>
      <h3> Vaiko duomenys:</h3>
      <p> Vaiko vardas: {}</p>
      <p> Vaiko pavardė: {}</p>
      {/* <p> Vaiko asmens kodas: {}</p> */}
      <p> Vaiko gimimo data: {}</p>
      <p> Vaiko deklaruotas miestas: {}</p>
      <p> Vaiko deklaruota gatvė: {}</p>
      <p> Vaiko deklaruotas namo numeris: {}</p>
      <p> Vaiko deklaruotas buto numeris: {}</p>
      <p> Šis vaikas yra įvaikintas: {}</p>

      <h3> Vaiko tėvų/globėjų duomenys:</h3>
      <p> Tėvo/Globėjo vardas: {}</p>
      <p> Tėvo/Globėjo pavardė: {}</p>
      <p> Tėvo/Globėjo el.paštas: {}</p>
      <p> Tėvo/Globėjo Tel.nr: {}</p>
      <p> Tėvo/Globėjo auginamų nepilnamečių vaikų skaičius: {}</p>
      {/* {this.state.studying ?  <p>Mokymosi įstaigos pavadinimas: {}</p>  null } */}
      <p> Tėvas/Globėjas turi mažesnį nei 40% darbingumo lygį: {}</p>

      {secondParent ? (
        <div>
          <h3>Vaiko antrojo tėvo/globėjo duomenys: </h3>
          <p>
            Vaiko antrojo tėvo/globėjo auginamų nepilnamečių vaikų skaičius: {}
          </p>
          <p>
            Vaiko antrojo tėvas/globėjas mokosi bendrojo lavinimo įstaigoje: {}
          </p>
          {/* {this.state.secondParentStudying ?  <p>Mokymosi įstaigos pavadinimas: {}</p> : null } */}
          <p>
            Vaiko antrojo tėvas/globėjas turi mažesnį nei 40% darbingumo lygį:{' '}
            {}
          </p>
          <p>
            Vaiko antrojo tėvas/globėjas mokosi bendrojo lavinimo įstaigoje: {}
          </p>
        </div>
      ) : (
        <div>
          <h3> Antrojo tėvo/globėjo duomenų vartotojas nenurodė</h3>
        </div>
      )}
      <h3> Prašymas registruotis į darželį:</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Pirmasis prioritetas</th>
              <th scope="col">Antrasis prioritetas</th>
              <th scope="col">Trečiasis prioritetas</th>
              <th scope="col">Ketvirtasis prioritetas</th>
              <th scope="col">Penktasis prioritetas</th>
              <th scope="col">Redaguoti</th>
            </tr>
          </thead>
          <tbody>
            <tr key={}>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>
                <Link
                  className="text-decoration-none mr-3"
                  to={`/edu/admin/vaikai/prasymas/redaguoti/${id}`}
                >
                  Redaguoti prašymą į darželį
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EduAdminChildInfoPresentation;
