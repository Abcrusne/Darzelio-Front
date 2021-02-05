import React from 'react';
import { Link } from 'react-router-dom';

const UsersListTablePresentation = ({
  users,
  deleteProduct,
  // resetPassword,
  searchQuery,
  handleSearch,
  search,
  handleSearchChange,
}) => {
  //neveikia
  //   const roleLt =
  //  users.role === "PARENT"
  //     ? "Tėvas"
  //     : users.role === 'EDU'
  //     ? "Švietimo specialistas"
  //     : "Nenurodyta";
  // return(
  //   <input
  //             type="text"
  //             className="form-control my-3"
  //             placeholder="Ieškoti pagal el.paštą..."
  //             value={searchQuery}
  //             onChange={handleSearch}
  //         />

  return users.map(({ id, firstname, lastname, email, role }, index) => {
    return (
      <tr key={id}>
        <th scope="row">{index + 1}</th>
        <td>{firstname}</td>
        <td> {lastname}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>
          <button className="btn btn-danger" value={id} onClick={deleteProduct}>
            Ištrinti
          </button>
        </td>
        <td>
          <Link
            className="text-decoration-none mr-3"
            to={`/admin/vartotojai/${id}`}
          >
            Atnaujinti duomenis
          </Link>
        </td>
        <td>
          {/* <button
              className="btn btn-success"
              value={id}
              onClick={resetPassword}
            >
              Reset
            </button> */}
        </td>
      </tr>
    );
  });
};
export default UsersListTablePresentation;
