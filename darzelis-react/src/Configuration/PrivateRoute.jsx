import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {grantPermission} from "./GrantPermission";
import {withRouter} from "react-router";


const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    return (
        <>
            { grantPermission(roles) && (
                <Route
                    {...rest}
                    render={(props) => (
                        <>
                            <Component {...props} />
                        </>
                    )}
                />
            )}
            {
                !grantPermission(roles) && (
                    <Redirect
                        to={{ pathname: "/login" }}
                    />
                )
            }
        </>
    );
}

//     return (
//
//         <Route
//             {...rest}
//             render={props =>
//                 role === "PARENT" ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{ pathname: "/login" }}
//                     />
//                 )
//             }
//         />
//     );
// }

export default withRouter(PrivateRoute);