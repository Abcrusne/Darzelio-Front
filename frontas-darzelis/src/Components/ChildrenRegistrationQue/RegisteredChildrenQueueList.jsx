import React, { Component } from 'react';
import { Pagination } from '@material-ui/lab';
import { Link } from 'react-router-dom';

//out imports
import { ModalForChildQueueDeleteButton } from '../Modal/ModalForChildQueueDeleteButton';
import DataService from '../Utilities/DataService';
import '../../Style/UsersLandings.css';
import userService from '../../Configuration/UserService';

export default class RegisteredChildrenQueueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childrenQueueList: [],
      sort: '',
      sortAccepted: [],
      searchLastname: '',
      sortLastname: [],
      currentChild: null,
      currentIndex: -1,
      pageNumber: 1,
      count: 0,
      currentPage: 1,
    };
  }

  componentDidMount = () => {
    console.log('component did mount');
    this.retrieveChildrenQueueList();
  };

  retrieveChildrenQueueList = () => {
    const { pageNumber, searchLastname, sort } = this.state;
    console.log('retrieveChildrenQueue');
    console.log(pageNumber + '' + searchLastname + '' + sort);
    DataService.getAll(pageNumber, sort, searchLastname)
      .then((response) => {
        const { registrations, totalPages } = response.data;
        console.log(response.data);
        this.setState({
          childrenQueueList: registrations,
          count: totalPages,
        });
        console.log(this.state.childrenQueueList);
      })
      .catch((error) => {
        if (error.status === 401) {
          alert('Neautorizuotas bandymas');
        } else if (error.status === 403) {
          alert('Neturite teisės prieiti prie duomenų');
        } else {
          alert('Duomenų nerasta');
        }
        console.log(error);
      });
  };

  onChange = (event) => {
    console.log(event.target.value);
    const searchLastname = event.target.value;

    this.setState(
      {
        searchLastname: searchLastname,
      },
      () => {
        this.retrieveChildrenQueueList();
      }
    );
  };

  deleteChild = (event) => {
    event.preventDefault();
    console.log('delete');
    const childId = event.target.value;
    DataService.delete(childId)
      .then(() => this.retrieveChildrenQueueList())
      .catch((error) => {
        if (error.status === 401) {
          alert('Neautorizuotas bandymas');
        } else if (error.status === 403) {
          alert('Neturite teisės atlikti veiksmo');
        } else {
          alert(
            'Pašalinti vaiko iš eilės galimybės nėra, eilė jau patvirtinta.'
          );
        }
        console.log(error);
      });
  };

  handlePageChange = (event, value) => {
    const { sortAccepted, sortLastName } = this.state;
    this.setState(
      {
        pageNumber: value,
      },
      () => {
        this.retrieveChildrenQueueList();
      }
    );
  };

  handleAcceptedSort = (event) => {
    event.preventDefault();
    this.setState(
      {
        sort: 'accepted',
      },
      () => {
        this.retrieveChildrenQueueList();
      }
    );
  };

  handleLastnameSort = (event) => {
    console.log('sort Lastname');

    this.setState(
      {
        sort: 'lastname',
      },
      () => {
        this.retrieveChildrenQueueList();
      }
    );
  };

  handleConfirmClick = (event) => {
    event.preventDefault();
    console.log('eiles patvirtinimas');
    DataService.confirm()
      .then((response) => {
        console.log(response.data);
        alert('Eilė patvirtinta sėkmingai');
      })
      .then(() => this.retrieveChildrenQueueList())
      .catch((error) =>
        alert(
          'Sistema užrakinta. Kreipkitės į sistemos administratorių dėl atrakinimo.'
        )
      );
  };

  render() {
    let rowNumber = 15 * this.state.currentPage - 14;
    console.log('render');
    const { searchLastName, childrenQueueList, pageNumber, count } = this.state;

    return (
      <div className="m-5">
        <div className="mb-4">
          <h4>Vaikų, pateikusių registraciją į darželius, eilės sąrašas</h4>
        </div>
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ieškoti pagal vaiko pavardę"
              value={searchLastName}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.retrieveChildrenQueueList}
              >
                Ieškoti
              </button>
            </div>
          </div>
        </div>

        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vardas</th>
              <th scope="col">
                <Link onClick={this.handleLastnameSort}>Pavardė</Link>
              </th>
              <th scope="col">Asmens kodas</th>
              <th scope="col">Reitingas</th>
              <th scope="col" onClick={this.handleAcceptedSort}>
                <Link>Statusas(priimtas/ laukiantis)</Link>
              </th>
              <th scope="col">Darželio pavadinimas (jei vaikas priimtas)</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {childrenQueueList.length !== 0 ? (
              childrenQueueList.map(
                (
                  {
                    childId,
                    firstname,
                    lastname,
                    rating,
                    accepted,
                    personalCode,
                    kindergartenName,
                  },
                  index
                ) => {
                  return (
                    <tr key={childId}>
                      <th scope="row">{rowNumber++}</th>
                      {/*<th scope="row">{index + 1}</th>*/}
                      <td>{firstname}</td>
                      <td>
                        <Link to={`/admin/edu/vaikai/${childId}`}>
                          {lastname}{' '}
                        </Link>
                      </td>
                      <td>{personalCode}</td>
                      <td>{rating}</td>
                      {accepted ? (
                        <td>Priimtas</td>
                      ) : (
                        <td>Laukiančiųjų eilėje</td>
                      )}
                      <td>{kindergartenName}</td>
                      <td>
                        {userService.getRole() === '[EDU]' ? (
                          <button
                            className="mr-4 btn btn-light"
                            data-toggle="modal"
                            data-target={`#staticBackdrop${childId}`}
                            value={childId}
                          >
                            Pašalinti iš eilės
                          </button>
                        ) : (
                          ''
                        )}
                      </td>
                      <td>
                        <ModalForChildQueueDeleteButton
                          childId={childId}
                          onClick={this.deleteChild}
                          firstname={firstname}
                          lastname={lastname}
                        />
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr>...</tr>
            )}
          </tbody>
        </table>

        <Pagination
          className="my-3"
          count={count}
          page={pageNumber}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={this.handlePageChange}
        />
        <div>
          {userService.getRole() === '[EDU]' ? (
            <button
              type="button"
              className="mr-4 btn text-nowrap"
              onClick={this.handleConfirmClick}
            >
              Patvirtinti vaikų eilę į darželius
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
