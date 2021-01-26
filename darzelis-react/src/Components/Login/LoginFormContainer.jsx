import React, {Component} from "react"

import LoginFormPresentation from "./LoginFormPresentation"
import {API} from "../../Configuration/AppConfig"
import axios from "axios";

axios.defaults.withCredentials = true; // leidžia dalintis cookies

export default class LoginFormContainer extends Component {
constructor() {
    super();
    this.state = {
        email: "",
        password: ""
    }
}

    onEmailChange = event => {
    this.setState({email: event.target.value});
    }

    onPasswdChange = event => {
        this.setState({password: event.target.value});
    }

   onSubmit = event => {
    let userData = new URLSearchParams();
    userData.append("username", this.state.email);
    userData.append("password", this.state.password);

    axios
        .post(`${API}/login`, userData,
            {headers: { "Content-type": "application/x-www-form-urlencoded"}})
        .then(response => {console.log(`user${response.data.username}logged in` )})
        .catch( error => {console.log(error)});
    event.preventDefault();
    }

    render(){
        return(
            <div className="container mt-5">
                <div>

                </div>
                <LoginFormPresentation
                    email={this.state.email}
                    password={this.state.password}
                    onEmailChange={this.onEmailChange}
                    onPasswdChange={this.onPasswdChange}
                    onSubmit={this.onSubmit}
                    />
            </div>
        )
    }
}
