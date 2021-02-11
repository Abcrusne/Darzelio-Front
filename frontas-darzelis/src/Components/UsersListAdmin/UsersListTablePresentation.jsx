import React from 'react';
import { Link } from 'react-router-dom';
import ModalComponent from '../Modal/ModalComponent';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const UsersListTablePresentation = ({
  users,
  deleteUser,
  // toggleModal,
  // isOpen,
}) => {
  return users.map(({ id, firstname, lastname, email, role }, index) => {
    // const roleLt =
    //   users.role == 'PARENT'
    //     ? 'Tėvas'
    //     : users.role == 'EDU'
    //     ? 'Švietimo specialistas'
    //     : 'Nenurodyta';

    return (
      <tr key={id}>
        <th scope="row">{index + 1}</th>
        <td>{firstname}</td>
        <td> {lastname}</td>
        <td>{email}</td>
        <td>{role}</td>

        <td>
          <Link
            className="text-decoration-none mr-3"
            to={`/admin/vartotojai/${id}`}
          >
            Atnaujinti duomenis
          </Link>
        </td>
        <td>
          {/* <button className="btn btn-danger" value={id} onClick={deleteUser}>
            Ištrinti
          </button> */}
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target={`#staticBackdrop${id}`}
            value={id}
          >
            Ištrinti
          </button>
        </td>
        <td>
          <ModalComponent userId={id} email={email} deleteUser={deleteUser} />
        </td>
      </tr>
    );
  });
};
export default UsersListTablePresentation;
