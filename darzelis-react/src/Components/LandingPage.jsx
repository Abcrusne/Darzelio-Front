import React, {Component} from "react";
import LoginFormContainer from "../Components/Login/LoginFormContainer"

//style
import "./LandingPage.css"

export default class LandingPage extends Component {

    render(){
        return(
<<<<<<< Updated upstream:darzelis-react/src/Components/LandingPage.jsx
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
=======
                <main className="pt-5">
                    <div className="text-center align-middle ">
                        <i className="fas fa-school"></i>
                        <h2 className="mt-4">Vaikų darželių informacinė sistema</h2>
                    </div>
                    <LoginFormContainer/>
                </main>
>>>>>>> Stashed changes:frontas-darzelis/src/Components/LandingPage.jsx

        )
    }
}