import React, {Component} from 'react';
import axios from "axios";
import { withRouter } from 'react-router';

//our imports
import {API} from "../../Configuration/AppConfig";
import "../../Style/ParentLanding.css"

class MainRegistrationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: [],
            childId: 0,
            firstname: "",
            lastname: "",
            kindergartens: [],
            kindergarten_name: '',
            firstPriority: "",
            secondPriority: "",
            thirdPriority: "",
            fourthPriority: "",
            fifthPriority: "",

        }
    }

    getKindergartens = async () => {
        try {
            const {data} = await axios.get(`${API}/api/kindergartens`, {
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            });
            return data;
        } catch (error) {
            console.log(error.message);
        }
    }

    getChildren = async () => {
        try {
            const {data} = await axios.get(`${API}/api/users/getloggeduserchildren`);
            return data;
        } catch (error){
            console.log(error.message);
        }
    }

    async componentDidMount() {
        const kindergartensData = await this.getKindergartens();
        const childrenData = await this.getChildren();
        console.log(kindergartensData);
        console.log(childrenData);
        let kindergartens = kindergartensData.map((kindergarten) => ({name: kindergarten.name, id: kindergarten.id} ));
        let children = childrenData.map((child) => ({firstname: child.firstname, lastname: child.lastname, id: child.id} ));
        this.setState({
            kindergartens: kindergartens,
            children: children
        })
    }

    handleChange = (event) => {
        this.setState({
                ...this.state,
                [event.target.name]: event.target.name === "childId"
                    ? parseInt(event.target.value, 10)
                    : event.target.value
            }
        )
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let state = this.state;

        const dataLoad = {
            childId: state.childId,
            firstPriority: state.firstPriority,
            secondPriority: state.secondPriority,
            thirdPriority: state.thirdPriority,
            fourthPriority: state.fourthPriority,
            fifthPriority: state.fifthPriority,
            id: 0,
        }
        console.log(dataLoad);

        if(dataLoad.childId && dataLoad.firstPriority && dataLoad.firstPriority.length > 0) {
            axios
                .post(`${API}/api/kindergartens/register`, dataLoad
                )
                .then(response => {
                    alert('Registracija sėkminga!');
                    this.props.history.push('/tevai');
                })
                .catch((error) => {console.log(error)});
        } else {alert('Patikrinkite ar visi duomenys teisingi!')}
    }

    render() {
        const {kindergartens, children, firstPriority, secondPriority, thirdPriority, fourthPriority} = this.state;

        return(
            <div className="container">
                {(children && children.length > 0) && (kindergartens && kindergartens.length > 0) ? (
                    <form className="shadow p-3 mt-5 bg-white rounded"
                          onSubmit={this.handleSubmit}
                    >
                        <div className="mb-3">
                            <h4>Vaiko registracijos į darželį forma</h4>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text form-control" htmlFor="selectChild">
                                Vaikas
                            </label>
                            <select className="form-control" id="selectChild" onChange={this.handleChange}
                                    name="childId">
                                <option selected>Pasirinkite vaiką</option>
                                {this.state.children.map((child) => (
                                    <option
                                        key={child.id}
                                        value={child.id}
                                    >{child.firstname + ' ' + child.lastname}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text form-control" htmlFor="selectKindergarten1">
                                I prioriteto darželis
                            </label>
                            <select
                                className="form-control"
                                id="selectKindergarten1"
                                onChange={this.handleChange}
                                name="firstPriority"
                            >
                                <option selected>Pasirinkite darželį</option>
                                {kindergartens
                                    .map((kindergarten, index) => {
                                        return <option
                                            key={index}
                                            value={kindergarten.name}
                                        >{kindergarten.name}
                                        </option>;
                                    })}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text form-control" htmlFor="selectKindergarten2">
                                II prioriteto darželis
                            </label>
                            <select
                                className="form-control"
                                id="selectKindergarten2"
                                name="secondPriority"
                                onChange={this.handleChange}
                            >
                                <option selected>Pasirinkite darželį</option>
                                {kindergartens
                                    .filter(kindergarten =>
                                        kindergarten.name !== firstPriority)
                                    .map((filteredKindergarten, index) => {
                                        return <option
                                            key={index}
                                            value={filteredKindergarten.name}
                                        >{filteredKindergarten.name}
                                        </option>;
                                    })}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text form-control" htmlFor="selectKindergarten3">
                                III prioriteto darželis
                            </label>
                            <select
                                className="form-control"
                                id="selectKindergarten3"
                                name="thirdPriority"
                                onChange={this.handleChange}
                            >
                                <option selected>Pasirinkite darželį</option>
                                {kindergartens
                                    .filter(kindergarten =>
                                        kindergarten.name !== firstPriority &&
                                        kindergarten.name !== secondPriority)
                                    .map((filteredKindergarten, index) => {
                                        return <option
                                            key={index}
                                            value={filteredKindergarten.name}
                                        >{filteredKindergarten.name}
                                        </option>;
                                    })}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text form-control" htmlFor="selectKindergarten4">
                                IV prioriteto darželis
                            </label>
                            <select
                                className="form-control"
                                id="selectKindergarten4"
                                name="fourthPriority"
                                onChange={this.handleChange}
                            >
                                <option selected>Pasirinkite darželį</option>
                                {kindergartens
                                    .filter(kindergarten =>
                                        kindergarten.name !== firstPriority &&
                                        kindergarten.name !== secondPriority &&
                                        kindergarten.name !== thirdPriority)
                                    .map((filteredKindergarten, index) => {
                                        return <option
                                            key={index}
                                            value={filteredKindergarten.name}
                                        >{filteredKindergarten.name}
                                        </option>;
                                    })}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text form-control" htmlFor="selectKindergarten5">
                                V prioriteto darželis
                            </label>
                            <select
                                className="form-control"
                                id="selectKindergarten5"
                                name="fifthPriority"
                                onChange={this.handleChange}
                            >
                                <option selected>Pasirinkite darželį</option>
                                {kindergartens
                                    .filter(kindergarten =>
                                        kindergarten.name !== firstPriority &&
                                        kindergarten.name !== secondPriority &&
                                        kindergarten.name !== thirdPriority &&
                                        kindergarten.name !== fourthPriority)
                                    .map((filteredKindergarten, index) => {
                                        return <option
                                            key={index}
                                            value={filteredKindergarten.name}
                                        >{filteredKindergarten.name}
                                        </option>;
                                    })}
                            </select>
                        </div>
                        <button type="submit" className="mr-4 btn">Pateikti</button>
                    </form>
                ) : <span>Loading...</span>}
            </div>
        )
    }
}
export default  withRouter(MainRegistrationContainer);

