import React, {useState} from "react"

import LoginFormPresentation from "./LoginFormPresentation"
import API from "../../Configuration/AppConfig"



const LoginFormContainer = () => {
// const [state, setState] = useState({
//     email: "",
//     password: "",
//     loginErrors: "",
//     isLoggedIn: false
// });

    const handleSubmit = (event) => {

        event.preventDefault();
    }

    return(
        <div className="container mt-5">
            <LoginFormPresentation
            onSubmit={handleSubmit}/>
        </div>
    )
}

export default LoginFormContainer