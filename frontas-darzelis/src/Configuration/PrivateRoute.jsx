import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {withRouter} from "react-router";
import UserService from "./UserService";

const PrivateRoute = ({ component: Component, role, ...rest }) => {
    const isAuthenticated = () => {
        return UserService.getRole().includes(role) && UserService.getRoleExpiration() > Date.now();
    }

    console.log(isAuthenticated());
    return (
        <div>
            {isAuthenticated()  ?
                (<Route
                {...rest}
                render={(props) => (
                    <>
                        <Component {...props} />
                    </>
                )}
                />) :
                (<Redirect to={{ pathname: "/login" }}
            />)}
        </div>
    );
}

export default withRouter(PrivateRoute);