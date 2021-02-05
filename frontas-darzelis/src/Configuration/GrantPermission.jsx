import axios from "axios";
import {API} from "./AppConfig";


export const grantPermission = (requestedRoles) => {

        axios
        .get(`${API}/api/users/loggedrole`)
        .then(response => {
            if(response.data === requestedRoles) {
                return true
            }
            //     this.setState({role: "PARENT"})
            //     this.props.history.push("/dashboard");
            // }
        })
        .catch(error => {console.log(error);});
    // in case of multiple roles, if one of the permittedRoles is present in requestedRoles, return true;
    return false;
};