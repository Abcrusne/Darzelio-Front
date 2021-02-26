import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Loading from '../Loading/Loading';
//import ModalComponentChildren from '../Modal/ModalComponentChildren';

const ChildrenListTablePresentation = ({
  children,
  // deleteChild
}) => {
  let sortedChildren = [...children];
  sortedChildren.sort((a, b) => {
    if (a.firstname < b.firstname) {
      return -1;
    }
    if (a.firstname > b.firstname) {
      return 1;
    }
    return 0;
  });
  if (sortedChildren.length > 0) {
    return sortedChildren.map(({ id, firstname, lastname }, index) => {
      return (
        <tr key={id}>
          <th scope="row">{index + 1}</th>
          <td>{firstname}</td>
          <td> {lastname}</td>
          <td>
            <Link
              className="text-decoration-none mr-3"
              to={`/tevai/vaikai/${id}`}
            >
              Peržiūrėti/Atnaujinti vaiko duomenis
            </Link>
          </td>
          <td>
            <Link
              className="text-decoration-none mr-3"
              to={`/tevai/registracijos/${id}`}
            >
              Peržiūrėti/Atnaujinti prašymą į darželį
            </Link>
          </td>
          {/* <td>
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target={`#staticBackdrop${id}`}
            // onClick={deleteChild}
            value={id}
          >
            Ištrinti
          </button>
        </td> */}
          {/* <td>
          <ModalComponentChildren
            childId={id}
            firstname={firstname}
            lastname={lastname}
            deleteChild={deleteChild}
          />
        </td> */}
        </tr>
      );
    });
  } else {
    return(
      <Loading/>
    )
  }
};
export default ChildrenListTablePresentation;
