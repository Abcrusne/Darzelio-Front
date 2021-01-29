import React, {Component} from "react"
import axios from "axios";

import LoginFormPresentation from "./LoginFormPresentation"
import {API} from "../../Configuration/AppConfig"
import {withRouter} from "react-router";
// import {Redirect} from "react-router";


axios.defaults.withCredentials = true; // leidžia dalintis cookies

class LoginFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
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
                {headers:{'Content-type':'application/x-www-form-urlencoded'}})
            .then(response => {console.log(response.data)
                this.props.history.push("/dashboard");
                // this.getRole();
            })
        .catch( error => {alert(error)});
        event.preventDefault();

    }

    // getRole = () => {
    //     axios
    //         .get(`${API}/api/users/loggedrole`)
    //         .then(response => {
    //                 console.log(response.data);
    //             if(response.data === "PARENT") {
    //                 this.setState({role: "PARENT"})
    //                 this.props.history.push("/dashboard");
    //                 }
    //         })
    //         .catch(error => {console.log(error);});
    // }
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

export default withRouter (LoginFormContainer)
// const LoginFormContainer = () => {
//     const [isLoggedIn, setLoggedIn] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const {setAuthTokens} = useAuth();
//
//
//    const onEmailChange = event => {
//        setEmail(event.target.value);
//     }
//
//    const onPasswdChange = event => {
//         setPassword(event.target.value);
//     }
//
//    const onSubmit = event => {
//         axios
//             .post(`${API}/login`,
//                 {email, password})
//             .then(response => {
//                 if(response.status === 200) {
//                     setAuthTokens(response.data);
//                     setLoggedIn(true);
//                 } else {
//                     setIsError(true);
//                     // this.props.history.push('${API}/dashboard');
//                 }
//             })
//             // {console.log(`user${response.data.username}logged in` )})
//             .catch(error => {
//                 setIsError(true);
//                 // if (error.response.status >= 400) {
//                 //     alert('el.paštas arba slaptažodis negzistuoja!');
//                 // }
//             });
//         // .catch( error => {alert(error)});
//         event.preventDefault();
//         if (isLoggedIn) {
//             return <Redirect to="/dashboard" />
//         }}
//         return(
//             <div className="container mt-5">
//                 <div>
//                     {isError && <p>Įvestas neteisingas el. pašto adresas arba slaptažodis</p>}
//                 </div>
//                 <LoginFormPresentation
//                     email={email}
//                     password={password}
//                     onEmailChange={onEmailChange}
//                     onPasswdChange={onPasswdChange}
//                     onSubmit={onSubmit}
//                 />
//             </div>
//         )
//
// }
// export default LoginFormContainer;



