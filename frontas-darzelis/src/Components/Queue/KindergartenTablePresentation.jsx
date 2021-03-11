import React, { useEffect } from 'react';
//import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import '../../Style/style.css';
//import '../../Style/ParentLanding.css';
import '../../Style/LandingPage.css';

const KindergartenTable = ({ kindergartens, admissionId }) => {

  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Darželio pavadinimas',
        field: 'kindergartenName',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Amžiaus grupė',
        field: 'ageGroup',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Registracijų skaičius',
        field: 'submissions',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Viso vietų darželyje',
        field: 'freeSpots',
        sort: 'asc',
        width: 100,
      },
    ],

    rows: kindergartens,
    // [kindergartens
    //   .map(
    //                   (
    //                     { id, kindergartenName, ageGroup, submissions, freeSpots },
    //                     index
    //                   ) => (

    //   {
    //     key: {id },
    //     kindergartenName: {kindergartenName},
    //     ageGroup: {ageGroup},
    //     submissions: {submissions},
    //     freeSpots: {freeSpots}
    //   }
    // ) )

    // ]
  };

  // useEffect(() => {
  //   if (data.rows.length === 0) {
  //     let error = document.createElement('td');
  //     error.setAttribute('colspan', `${data.columns.length}`);
  //     error.innerText = 'Nerasta';
  //     document.querySelector('tbody').appendChild(error);
  //   }
  // }, [data.rows.length, data.columns.length]);

  return (
    <MDBDataTable
      className="table "
      striped
      bordered
      // hover
      small
      data={data}
      entriesLabel="Rodyti puslapyje"
      searchLabel="Paieška"
      paginationLabel={['Atgal', 'Kitas']}
      infoLabel={['Rodyti nuo', 'iki', 'rezultatų', '']}
      // messageLabel=""
      // emptytable="ii"
    />
  );

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

  // const [sortedField, setSortedField] = React.useState(null);
  // const [searchTerm, setSearchTerm] = useState('');
  // let sortedKindergartens = [...kindergartens];

  // if (sortedField !== null) {
  //   sortedKindergartens.sort((a, b) => {
  //     if (a[sortedField] < b[sortedField]) {
  //       return -1;
  //     }
  //     if (a[sortedField] > b[sortedField]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   //     .filter(
  //   //       ({
  //   //         id,
  //   //         kindergartenName,
  //   //         ageGroup,
  //   //         submissions,
  //   //         freeSpots,
  //   //       }) => {
  //   //         if (searchTerm === '') {
  //   //           return (
  //   //             id, kindergartenName, ageGroup, submissions, freeSpots
  //   //           );
  //   //         } else if (
  //   //           kindergartenName
  //   //             .toLowerCase()
  //   //             .includes(searchTerm.toLowerCase())
  //   //         ) {
  //   //           return (
  //   //             id, kindergartenName, ageGroup, submissions, freeSpots
  //   //           );
  //   //         }
  //   //       }
  //   // )
  // }

  // // sortedKindergartens.filter(
  // //               ({
  // //                 id,
  // //                 kindergartenName,
  // //                 ageGroup,
  // //                 submissions,
  // //                 freeSpots,
  // //               }) => {
  // //                 if (searchTerm === '') {
  // //                   return (
  // //                     id, kindergartenName, ageGroup, submissions, freeSpots
  // //                   );
  // //                 } else if (
  // //                   kindergartenName
  // //                     .toLowerCase()
  // //                     .includes(searchTerm.toLowerCase())
  // //                 ) {
  // //                   return (
  // //                     id, kindergartenName, ageGroup, submissions, freeSpots
  // //                   );
  // //                 }
  // //               }
  // // )

  // const [currentPage, setCurrentPage] = useState(1);

  // const [kindergartensPerPage] = useState(5);

  // const indexOfLastKindergarten = currentPage * kindergartensPerPage;
  // const indexOfFirstKindergarten =
  //   indexOfLastKindergarten - kindergartensPerPage;
  // const currentKindergartens = sortedKindergartens.slice(
  //   indexOfFirstKindergarten,
  //   indexOfLastKindergarten
  // );
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // return (
  //   <div>
  //     <h4 className="text-center mb-3">Eilės darželiuose</h4>
  //     <input
  //       className="form-control mt-3 col-4"
  //       placeholder="Paieška pagal darželio pavadinimą"
  //       type="text"
  //       onChange={(event) => {
  //         setSearchTerm(event.target.value);
  //       }}
  //     />
  //      {/* <tr className="mt-5 mb-5">
  //           <th> */}
  //             <p
  //               className="  sort col-3"
  //               onClick={() => setSortedField('kindergartenName')}
  //             >
  //               Rūšiuoti pagal darželio pavadinimą
  //             </p>
  //           {/* </th>
  //           <th> */}
  //             <p
  //               className=" sort col-3"
  //               onClick={() => setSortedField('submissions')}
  //             >
  //               Rūšiuoti pagal darželio registracijų skaičių
  //             </p>
  //           {/* </th>
  //           <th> */}
  //             <p className=" sort col-3" onClick={() => setSortedField('freeSpots')}>
  //               Rūšiuoti pagal darželio laisvų vietų skaičių
  //             </p>
  //           {/* </th>
  //         </tr> */}
  //     <table className="table">
  //       <thead>

  //         <tr className="mt-5 mb-5">
  //           <th  scope="col">#</th>
  //           <th  scope="col">Darželio pavadinimas</th>
  //           <th scope="col">Amžiaus grupė</th>
  //           <th scope="col">Registracijų skaičius</th>
  //           <th scope="col">Laisvų vietų skaičius</th>
  //           {/* <th>Patvirtinta (taip/ne)</th> */}
  //           <th scope="col">Peržiūrėti eilę</th>
  //           {/* <th>Patvirtinti eilę</th> */}
  //         </tr>
  //       </thead>
  //       {currentKindergartens.length > 0 && (
  //         <tbody>
  //           {/* reikia kad mapintu is currentKindergartens, o filterintu is sorted kindergartens */}
  //           {currentKindergartens
  //             .filter(
  //               ({
  //                 id,
  //                 kindergartenName,
  //                 ageGroup,
  //                 submissions,
  //                 freeSpots,
  //               }) => {
  //                 if (searchTerm === '') {
  //                   return (
  //                     id, kindergartenName, ageGroup, submissions, freeSpots
  //                   );
  //                 } else if (
  //                   kindergartenName
  //                     .toLowerCase()
  //                     .includes(searchTerm.toLowerCase())
  //                 ) {
  //                   return (
  //                     id, kindergartenName, ageGroup, submissions, freeSpots
  //                   );
  //                 }
  //               }
  //             )
  //             //reikia kad mapintu is currentKindergartens, o filterintu is sorted kindergartens
  //             .map(
  //               (
  //                 { id, kindergartenName, ageGroup, submissions, freeSpots },
  //                 index
  //               ) => (
  //                 <tr key={id}>
  //                   <th scope="row">{index + 1}</th>
  //                   <td>{kindergartenName}</td>
  //                   <td>{ageGroup}</td>
  //                   <td>{submissions}</td>
  //                   <td>{freeSpots}</td>
  //                   {/* <td> {confirmed}</td> */}
  //                   <td>
  //                     <Link
  //                       className="btn btn-link-1 mr-3"
  //                       to={`/admin/edu/registracijos/${admissionId}/eiles/${id}/`}
  //                     >
  //                       Peržiūrėti
  //                     </Link>
  //                   </td>
  //                   {/* {this.state.confirm ? (
  //                 <td>
  //                   <button className="btn" disabled>
  //                     Patvirtinta
  //                   </button>
  //                 </td>
  //               ) : ( */}
  //                   {/* <td>
  //                   <button
  //                   className="btn"
  //                   // value={id}
  //                   // onClick={handleConfirm(id)}
  //                 > */}
  //                   {/* Patvirtinti
  //                 </button> */}
  //                   {/* <button
  //                     className="btn btn-danger"
  //                     // data-toggle="modal"
  //                     // data-target={`#staticBackdrop${id}`}
  //                     // value={id}
  //                   >
  //                     Patvirtinti
  //                   </button> */}
  //                   {/* <ModalComponentConfirm
  //                     kindergartenId={id}
  //                     kindergartenName={kindergartenName}
  //                     handleConfirm={handleConfirm}
  //                   /> */}
  //                   {/* </td> */}
  //                   {/* )} */}
  //                 </tr>
  //               )
  //             )}
  //         </tbody>
  //       )}
  //     </table>
  //     <Pagination
  //       kindergartensPerPage={kindergartensPerPage}
  //       totalKindergartens={kindergartens.length}
  //       paginate={paginate}
  //     />
  //   </div>
  // );
};
export default KindergartenTable;
