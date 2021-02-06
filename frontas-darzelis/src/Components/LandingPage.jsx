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
                <LoginFormContainer/>
            </div>

        )
    }
}