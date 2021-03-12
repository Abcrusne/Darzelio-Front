import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../Style/UsersLandings.css';
import Loading from '../Loading/Loading';

const ChildrenTablePresentation = ({ children, parentId }) => {
  const sortedChildren = [...children];

  sortedChildren.sort((a, b) => {
    if (a.firstname < b.firstname) {
      return -1;
    }
    if (a.firstname > b.firstname) {
      return 1;
    }
    return 0;
  });

  return sortedChildren.map(({ id, firstname, lastname }, index) => {
    return (
      <tr key={id}>
        <th scope="row">{index + 1}</th>
        <td>{firstname}</td>
        <td> {lastname}</td>
        <td>
          <Link
            className="text-decoration-none mr-3"
            to={`/admin/${parentId}/vaikai/${id}`}
          >
            Peržiūrėti/Atnaujinti vaiko duomenis
          </Link>
        </td>
        <td>
          <Link
            className="text-decoration-none mr-3"
            to={`/admin/${parentId}/vaikai/registracijos/${id}`}
          >
            Peržiūrėti/Atnaujinti prašymą į darželį
          </Link>
        </td>
      </tr>
    );
  });
};
export default ChildrenTablePresentation;
