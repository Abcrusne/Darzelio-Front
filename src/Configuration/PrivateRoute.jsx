import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {withRouter} from "react-router";
import UserService from "./UserService";

const PrivateRoute = ({ component: Component, role, ...rest }) => {
    return (
        <div>
            {UserService.getRole().includes(role) ?
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