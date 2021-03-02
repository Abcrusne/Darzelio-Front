import React, {useState} from "react";
import {ModalForStopRegToKindergButton} from "../../Modal/ModalForStopRegToKindergButton";
import axios from "axios";
import {API} from "../../../Configuration/AppConfig";

export const StartStopButtonstoKindergRegistration = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleStartClick = () => {
        axios
            .post(`${API}//bean-app/api/kindergartens/admission/activate`)
            .then(response => {
                console.log(response.data);
                setIsOpen(true);
                alert('Sėkmingai paleista registracija į darželius.')
            })
            .catch(error => console.log(error))
    }
    const handleStopClick = () => {
        axios
            .post(`${API}/bean-app/api/kindergartens/admission/deactivate`)
            .then(response => {
                console.log(response.data);
                setIsOpen(false);
            })
            .catch(error => console.log(error))
    }
    return(
        <div className="pt-3">
            <button
                type="button"
                className="mr-4 btn text-nowrap"
                onClick={handleStartClick}
            >Paleisti registraciją į darželius
            </button>
            <button
                className="mr-4 btn btn-danger"
                data-toggle="modal"
                data-target={`#staticBackdrop`}
                // value={id}
            >Stabdyti registraciją į darželius
            </button>
            <ModalForStopRegToKindergButton
                onClick={handleStopClick}
            />
        </div>
    )
}