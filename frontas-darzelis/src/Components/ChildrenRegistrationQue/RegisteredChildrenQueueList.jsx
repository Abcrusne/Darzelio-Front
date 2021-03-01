import React, {Component} from "react";
import {Pagination} from "@material-ui/lab";
import {Link} from "react-router-dom"

//out imports
import {ModalForChildQueueDeleteButton} from "../Modal/ModalForChildQueueDeleteButton";
import axios from "axios";
import {API} from "../../Configuration/AppConfig";
import DataService from "./DataService";

export default class RegisteredChildrenQueueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childrenQueueList: [],
            currentChild: null,
            currentIndex: -1,
            searchLastName: '',
            searchPersonalCode: '',
            sortAccepted: '',
            page: 1,
            count: 0,
            pageSize: 20,
        };
    }

    componentDidMount = () => {
        console.log("component did mount")
        this.retrieveChildrenQueueList();
    }

    onChangeSearchLastName = (event) => {
        event.preventDefault();
        const searchLastName = event.target.value;

        this.setState({
            searchLastName: searchLastName,
        });
    }
    //
    // onChangeSearchPersonaCode = (event) => {
    //     event.preventDefault();
    //     const searchPersonalCode = event.target.value;
    //
    //     this.setState({
    //         searchPersonalCode: searchPersonalCode,
    //     });
    // }

    // getRequestParams = (searchLastName, searchPersonalCode, page, pageSize) => {
    //     let params = {};
    //
    //     if (searchLastName) {
    //         params['lastname'] = searchLastName;
    //     }
    //     // if (searchPersonalCode) {
    //     //     params['personalCode'] = searchPersonalCode;
    //     // }
    //     if (page) {
    //         params['page'] = page - 1;
    //     }
    //     if (pageSize) {
    //         params['size'] = pageSize;
    //     }
    //     return params;
    // }

    retrieveChildrenQueueList = () => {
        // const {searchLastName, searchPersonalCode, page, pageSize} = this.state;
        // const params = this.getRequestParams(searchLastName, searchPersonalCode, page, pageSize);
        // DataService.getAll(params)
        axios
            .get(`${API}/api/kindergartens/admission/registrations`,
                {headers: {'Content-type': 'application/x-www-form-urlencoded'}})
            .then((response) => {
                // const {childrenQueueList, totalPages} = response.data;
                console.log(response.data);
                this.setState({
                    childrenQueueList: response.data,
                    // childrenQueueList: childrenQueueList,
                    // count: totalPages,
                });
                console.log(this.state.childrenQueueList);
            }).catch(error => {
                if (error.status === 401) {
                    alert('Neautorizuotas bandymas')
                } else if (error.status === 403) {
                    alert('Neturite teisės prieiti prie duomenų')
                } else {
                    alert('Duomenų nerasta')
                }
            console.log(error)
        })
    }

    deleteChild = (event) => {
        event.preventDefault();
        console.log("delete");
        axios
            .delete(`${API}/api/kindergartens/admission/registrations/${event.target.value}/delete`,
                {headers: {'Content-type': 'application/x-www-form-urlencoded'}})
            .then(() =>
                this.retrieveChildrenQueueList()
                )
            .catch(error => {
                if (error.status === 401) {
                    alert('Neautorizuotas bandymas')
                } else if (error.status === 403) {
                    alert('Neturite teisės atlikti veiksmo')
                } else {
                    alert('Duomenų nerasta')
                }
                console.log(error)
            })
    }

    // handlePageChange = (event, value) => {
    //     this.setState({
    //             page: value,
    //         },
    //         () => {
    //             this.retrieveChildrenQueueList();
    //         });
    // }
    // handlePageSizeChange = (event) => {
    //     this.setState({
    //             pageSize: event.target.value,
    //             page: 1,
    //         },
    //         () => {
    //             this.retrieveChildrenQueueList();
    //         });
    // }

    handleClick = (event) => {
        event.preventDefault();
        console.log("eiles patvirtinimas")
        axios
            .post(`${API}/api/kindergartens/admission/registrations/confirm`)
            .then(response => {
                console.log(response.data);
                alert('Eilė patvirtinta sėkmingai')})
            .then(() => this.retrieveChildrenQueueList())
            .catch(error => console.log(error))
    }

    render() {
        console.log("render")
        const {
            searchLastName,
            // searchPersonalCode,
            childrenQueueList,
            currentChild,
            currentIndex,
            page,
            count,
            // pageSize,
        } = this.state;

        return (

            <div className="m-5">
                <div className="mb-4">
                    <h4>Vaikų, pateikusių registraciją į darželius, sąrašas</h4>
                </div>
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ieškoti pagal vaiko pavardę"
                            value={searchLastName}
                            onChange={this.onChangeSearchLastName}
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
                        <th scope="col">Pavardė</th>
                        <th scope="col">Asmens kodas</th>
                        <th scope="col">Reitingas</th>
                        <th scope="col">Statusas(priimtas/ laukiantis)</th>
                        <th scope="col">Darželio pavadinimas (jei vaikas priimtas)</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>

                    <tbody>
                    {childrenQueueList.length !== 0 ? (
                        childrenQueueList.map(
                            ({childId, firstname, lastname, rating, accepted, personalCode, kindergartenName},
                             index) => {
                                return (
                                    <tr key={childId}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{firstname}</td>
                                        <td>{lastname}</td>
                                        <td>{personalCode}</td>
                                        <td>{rating}</td>
                                        {accepted ? <td>Priimtas</td> : <td>Laukiančiųjų eilėje</td>}
                                        <td>{kindergartenName}</td>
                                        <td>
                                            <button
                                                className="mr-4 btn btn-danger"
                                                data-toggle="modal"
                                                data-target={`#staticBackdrop${childId}`}
                                                value={childId}
                                            >Pašalinti iš eilės
                                            </button>
                                        </td>
                                        <td>
                                            <ModalForChildQueueDeleteButton
                                                childId={childId}
                                                onClick={this.deleteChild}
                                                firstName={firstname}
                                                lastname={lastname}
                                            />
                                        </td>
                                    </tr>
                                );
                            })) : <tr>...</tr>}
                    </tbody>

                    <tfoot>
                    <tr>
                        <td colSpan="8">
                            <button
                                type="button"
                                className="mr-4 btn text-nowrap"
                                onClick={this.handleClick}
                            >Patvirtinti darželio eilę
                            </button>
                        </td>
                    </tr>

                    </tfoot>
                </table>

                {/*<div className="mt-3">*/}
                {/*    {"Eilučių puslapyje: "}*/}
                {/*    <select onChange={this.handlePageSizeChange} value={pageSize}>*/}
                {/*        {this.pageSizes.map((size) => (*/}
                {/*            <option key={size} value={size}>*/}
                {/*                {size}*/}
                {/*            </option>*/}
                {/*        ))}*/}
                {/*    </select>*/}

                <Pagination
                    className="my-3"
                    count={count}
                    page={page}
                    siblingCount={1}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                    // onChange={this.handlePageChange}
                />
            </div>
        )
    }
}


