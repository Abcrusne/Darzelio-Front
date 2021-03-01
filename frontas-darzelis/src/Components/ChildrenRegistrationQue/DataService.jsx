import http from "./http-common";
import {API} from "../../Configuration/AppConfig";

class DataService{

    getAll(params) {
        return http.get(`/api/kindergartens/admission/registrations`, {params})
    }
    getAllData() {
        return http.get(`/api/kindergartens/admission/registrations`, )
    }

    delete(childId) {
        return http.delete(`/api/kindergartens/admission/registrations/${childId}/delete`);
    }


    findByLastName(lastName) {
        return http.get(`/api/kindergartens/admissions/registrations?lastName=${lastName}`);
    }

    findByPersonalCode(personalCode) {
        return http.get(`/api/kindergartens/admissions/registrations?personalCode=${personalCode}`);
    }

    sortByAccepted(accepted) {
        return http.get(`/api/kindergartens/admissions/registrations?accepted=${accepted}`);
    }

    // get(id) {
    //     return http.get(`/tutorials/${id}`);
    // }
    //
    // create(data) {
    //     return http.post("/tutorials", data);
    // }
    //
    // update(id, data) {
    //     return http.put(`/tutorials/${id}`, data);
    // }

}
export default new DataService();