import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Loading from '../Loading/Loading';
//import ModalComponentChildren from '../Modal/ModalComponentChildren';

const ChildrenListTablePresentation = ({
  children,
  // deleteChild
}) => {
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

  // if (children && children.length > 0) {
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
              to={`/tevai/vaikai/registracijos/${id}`}
            >
              Peržiūrėti/Atnaujinti prašymą į darželį
            </Link>
          </td>
        </tr>
      );
    });
  // } else {
  //   return (
  //     <tr>
  //       <th></th>
  //       <td></td>
  //       <td> </td>
  //       <td></td>
  //       <td></td>
  //     </tr>
  //   );
  // }
  // ;} else {
  //       return (
  // <p>mmm</p>
  // )
  // }
};
export default ChildrenListTablePresentation;
