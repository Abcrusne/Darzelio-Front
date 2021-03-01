import React from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../Configuration/UserService';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ModalComponentKindergarten from '../Modal/ModalComponentKindergarten';

export const KindergartensListTablePresentation = ({
  kindergartens,
  deleteKindergarten,
}) => {
  const currentRole = UserService.getRole();
  if (currentRole === '[EDU]') {
    return kindergartens.map(
      (
        { id, address, name, spotsInFirstAgeGroup, spotsInSecondAgeGroup },
        index
      ) => {
        return (
          <tr key={id}>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>{address}</td>
            <td> {spotsInFirstAgeGroup}</td>
            <td>{spotsInSecondAgeGroup}</td>

            <td>
              <Link
                className="text-decoration-none mr-3"
                to={`/admin/edu/darzeliai/${id}`}
              >
                Atnaujinti duomenis
              </Link>
            </td>
            <td>
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
              <ModalComponentKindergarten
                kindergartenId={id}
                name={name}
                deleteKindergarten={deleteKindergarten}
              />
            </td>
          </tr>
        );
      }
    );
  } else if (currentRole === '[ADMIN]') {
    return kindergartens.map(
      (
        { id, address, name, spotsInFirstAgeGroup, spotsInSecondAgeGroup },
        index
      ) => {
        return (
          <tr key={id}>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>{address}</td>
            <td> {spotsInFirstAgeGroup}</td>
            <td>{spotsInSecondAgeGroup}</td>

            <td>
              <Link
                className="text-decoration-none mr-3"
                to={`/admin/darzeliai/${id}`}
              >
                Atnaujinti duomenis
              </Link>
            </td>
            <td>
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
              <ModalComponentKindergarten
                kindergartenId={id}
                name={name}
                deleteKindergarten={deleteKindergarten}
              />
            </td>
          </tr>
        );
      }
    );
  }
};
