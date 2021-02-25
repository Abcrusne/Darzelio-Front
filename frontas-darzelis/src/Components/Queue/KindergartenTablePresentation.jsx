import React from 'react';
import { Link } from 'react-router-dom';
import ModalComponentConfirm from '../Modal/ModalComponentConfirm';
import Pagination from '../Pagination/Pagination';
import  { useState} from 'react';

const KindergartenTable=({
  kindergartens,
  admissionId,
  // handleConfirm,
  //   queueId,
}) => {

  // let sortedDefaultKindergartens = [...kindergartens];
  // sortedDefaultKindergartens.sort((a, b) => {
  //   if (a.kindergartenName < b.kindergartenName) {
  //     return -1;
  //   }
  //   if (a.kindergartenName > b.kindergartenName) {
  //     return 1;
  //   }
  //   return 0;
  // });
  
  const [sortedField, setSortedField] = React.useState(null);
  let sortedKindergartens = [...kindergartens];

  if (sortedField !== null) {
    sortedKindergartens.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }
  const [currentPage, setCurrentPage] = useState(1);

  const [kindergartensPerPage] = useState(5);

  const indexOfLastKindergarten = currentPage * kindergartensPerPage;
  const indexOfFirstKindergarten = indexOfLastKindergarten - kindergartensPerPage;
  const currentKindergartens = sortedKindergartens.slice(indexOfFirstKindergarten, indexOfLastKindergarten);
  const paginate = pageNumber => setCurrentPage(pageNumber);

 

 

  

  return (
    <div>
       <h4 className="text-center mb-3">Eilės darželiuose</h4>
    <table>
     
      <thead>
        <tr className="mt-5 mb-5">
          <th>
            <button
              className="btn"
              onClick={() => setSortedField('kindergartenName')}
            >
                Rūšiuoti pagal darželio pavadinimą
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setSortedField('submissions')}>
              Rūšiuoti pagal darželio registracijų skaičių
            </button>
          </th>
          <th>
            <button className="btn" onClick={() => setSortedField('freeSpots')}>
            Rūšiuoti pagal darželio laisvų vietų skaičių
            </button>
          </th>
        </tr>
        <tr className="mt-5 mb-5">
          <th>#</th>
          <th>Darželio pavadinimas</th>
          <th>Amžiaus grupė</th>
          <th>Registracijų skaičius</th>
          <th>Laisvų vietų skaičius</th>
          {/* <th>Patvirtinta (taip/ne)</th> */}
          <th>Peržiūrėti eilę</th>
          {/* <th>Patvirtinti eilę</th> */}
        </tr>
      </thead>
      {kindergartens.length > 0 && (
        <tbody>
          {currentKindergartens.map(
            (
              {
                id,
                kindergartenName,
                ageGroup,
                submissions,
                freeSpots,
                confirmed,
              },
              index
            ) => (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{kindergartenName}</td>
                <td>{ageGroup}</td>
                <td>{submissions}</td>
                <td>{freeSpots}</td>
                {/* <td> {confirmed}</td> */}
                <td>
                  <Link
                    className="btn btn-link-1 mr-3"
                    to={`/admin/edu/registracijos/${admissionId}/eiles/${id}/`}
                   
                  >
                    Peržiūrėti
                  </Link>
                </td>
                {/* {this.state.confirm ? (
                  <td>
                    <button className="btn" disabled>
                      Patvirtinta
                    </button>
                  </td>
                ) : ( */}
                  {/* <td>
                    <button
                    className="btn"
                    // value={id}
                    // onClick={handleConfirm(id)}
                  > */}
                    {/* Patvirtinti
                  </button> */}
                    {/* <button
                      className="btn btn-danger"
                      // data-toggle="modal"
                      // data-target={`#staticBackdrop${id}`}
                      // value={id}
                    >
                      Patvirtinti
                    </button> */}
                    {/* <ModalComponentConfirm
                      kindergartenId={id}
                      kindergartenName={kindergartenName}
                      handleConfirm={handleConfirm}
                    /> */}
                  {/* </td> */}
                {/* )} */}
              </tr>
            )
          )}
        </tbody>
      )}
    </table>
    <Pagination
     kindergartensPerPage={kindergartensPerPage}
     totalKindergartens={kindergartens.length}
     paginate={paginate}
    />
    </div>
  );
}
export default  KindergartenTable;