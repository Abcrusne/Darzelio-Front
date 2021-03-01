import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ModalComponentChildren from '../Modal/ModalComponentChildren';
import '../../Style/UsersLandings.css'

const ChildrenListTablePresentation = ({ children, deleteChild }) => {
  return children.map(({ id, firstname, lastname }, index) => {
    return (
      <tr key={id}>
        <th scope="row">{index + 1}</th>
        <td>{firstname}</td>
        <td> {lastname}</td>
        <td>
          <Link
            className="btn btn-link-1"
            to={`/tevai/vaikai/${id}`}
          >
            Peržiūrėti/Atnaujinti vaiko duomenis
          </Link>
        </td>
        <td>
          <Link
            className="btn btn-link-1"
            to={`/tevai/registracijos/${id}`}
          >
            Peržiūrėti/Atnaujinti prašymą į darželį
          </Link>
        </td>
        <td>
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target={`#staticBackdrop${id}`}
            // onClick={deleteChild}
            value={id}
          >
            Ištrinti
          </button>
        </td>
        <td>
          <ModalComponentChildren
            childId={id}
            firstname={firstname}
            lastname={lastname}
            deleteChild={deleteChild}
          />
        </td>
      </tr>
    );
  });
};
export default ChildrenListTablePresentation;
