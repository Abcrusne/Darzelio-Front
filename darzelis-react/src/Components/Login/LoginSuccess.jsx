import React from "react";
import UnlockAccess from "../../UnlockAccess";


const LoginSuccess = (props) => {

    // const logOut = () => {
    //
    // }

    return(
        <div className="card">
            <UnlockAccess request={"PARENT"}>
            <div className="card-body">
                sveikiname sėkmingai prisijungus!
            </div>
            {/*<button onClick={logOut}>Log out</button>*/}
            </UnlockAccess>
        </div>
    )


}
export default LoginSuccess