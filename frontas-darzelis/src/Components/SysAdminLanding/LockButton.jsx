import React, {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../Configuration/AppConfig";

export const LockButton = () => {

    const [isLocked, setIsLocked] = useState('')

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        axios
            .get(`${API}/api/kindergartens/admission/status`,)
            .then(response => {
                console.log(response.data);
                setIsLocked(response.data.locked)
            })
            .catch(error => console.log(error))
    }

    const handleLockClick = () => {
        axios
            .post(`${API}/api/kindergartens/admission/lock`)
            .then((response) => {
                fetchData();
                alert('Eilė į darželius užrakinta.')
            })
            .catch(error => console.log(error))
    }
    const handleUnlockClick = () => {
        axios
            .post(`${API}/api/kindergartens/admission/unlock`)
            .then((response) => {
                fetchData();
                alert('Eilė į darželius atrakinta.')
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="col-8 shadow border rounded p-5">
            <div >
                <h5 className="pb-3">Eilės statusas: {isLocked? "Eilė Užrakinta" : "Eilė atrakinta"}</h5>
            </div>
            <button
                type="button"
                className="mr-4 btn"
                onClick={handleLockClick}
            >Užrakinti eilę į darželius
            </button>
            <button
                type="button"
                className="mr-4 btn"
                // data-toggle="modal"
                // data-target={`#staticBackdrop`}
                onClick={handleUnlockClick}
            >Atrakinti registracijų į darželius eilę
            </button>
        </div>
    )
}