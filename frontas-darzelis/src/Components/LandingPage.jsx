import React, {Component} from "react";
import LoginFormContainer from "../Components/Login/LoginFormContainer"
import {Link} from "react-router-dom";

export default class LandingPage extends Component {

    render(){
        return(
            <div className="container-fluid">
                <header >
                    <h3 className="text-center align-middle mt-3">Sveiki atvykę į Vaikų darželių informacinę sistemą</h3>
                </header>
                <div className="border border-light border-right-0 border-left-0 mt-3 mb-3">
                    <ul className="nav justify-content-end" style={{height: 40}}>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link active">Darželių admin Login</Link>
                        </li>
                    </ul>
                </div>
                <LoginFormContainer/>
            </div>

        )
    }
}