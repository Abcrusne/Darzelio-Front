import React, { Component } from 'react';
import { Pagination } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import LogsService from '../Utilities/LogsService';
import '../../Style/UsersLandings.css';

export default class UserLogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      pageNumber: 1,
      totalPages: '',
      totalLogs: '',
      searchEmail: '',
      //   sortDate: [],
      sortByDate: 'datedesc',
    };
  }

  componentDidMount = () => {
    console.log('component did mount');
    this.retrieveUsersLogsList();
  };

  retrieveUsersLogsList = () => {
    const { pageNumber, searchEmail, sortByDate } = this.state;
    console.log('retrieveUsersLogsList');
    console.log(
      'pagenumber: ' +
        pageNumber +
        ' searchEmail: ' +
        searchEmail +
        ' sort: ' +
        sortByDate
    );
    LogsService.getAll(pageNumber, searchEmail, sortByDate)
      .then((res) => {
        console.log(res.data);
        this.setState({
          logs: res.data.logs,
          totalPages: res.data.totalPages,
          totalLogs: res.data.totalLogs,
        });
        console.log('userLogsList' + this.state.logs);
        //    LogsService.sortByDate(sort)
        //    .then((res)=>{
        //        this.setState({
        //         logs: res.data.logs,
        //         totalPages: res.data.totalPages,
        //         totalLogs: res.data.totalLogs,
        //        })
        //    })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  onChange = (event) => {
    console.log(event.target.value);
    const searchEmail = event.target.value;
    this.setState(
      {
        searchEmail: searchEmail,
      },
      () => {
        this.retrieveUsersLogsList();
      }
    );
  };

  handlePageChange = (event, value) => {
    this.setState(
      {
        pageNumber: value,
      },
      () => {
        this.retrieveUsersLogsList();
      }
    );
  };
  handleSortByDate = (event) => {
    event.preventDefault();
    {
      this.state.sortByDate === 'datedesc'
        ? this.setState(
            {
              sortByDate: 'dateasc',
            },
            () => {
              this.retrieveUsersLogsList();
            }
          )
        : this.setState(
            {
              sortByDate: 'datedesc',
            },
            () => {
              this.retrieveUsersLogsList();
            }
          );
    }
  };

  render() {
    return (
      <div className="m-5">
        <div className="mb-4">
          <h4> Vartotojų žurnalas</h4>
        </div>
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ieškoti pagal vartotojo el.paštą"
              type="text"
              name="searchEmail"
              value={this.state.searchEmail}
              onChange={this.onChange}
            />
          </div>
        </div>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vartotojas</th>
              <th scope="col">Rolė</th>
              <th scope="col">Veiksmas</th>
              <th scope="col">
                {' '}
                <Link
                  onClick={this.handleSortByDate}
                  // onClick={()=> (this.setState({sortByDate:"dateasc"}))}
                >
                  Data ir laikas
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.logs && this.state.logs.length > 0 ? (
              this.state.logs.map(({ id, user, role, action, date }, index) => {
                return (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user}</td>
                    <td>{role}</td>
                    <td>{action}</td>
                    <td>{date}</td>
                  </tr>
                );
              })
            ) : (
              <tr>...</tr>
            )}
          </tbody>
        </table>
        <Pagination
          className="my-3"
          count={this.state.totalPages}
          page={this.state.pageNumber}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}