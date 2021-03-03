import React, {useEffect, useState} from 'react';
import {StartStopButtonstoKindergRegistration} from "../ChildrenRegistrationQue/Buttons/StartStopButtonstoKindergRegistration";
import axios from "axios";
import {API} from "../../Configuration/AppConfig";

const EduAdminDashboard = () => {
    const [littleGroupsRegistrations, setLittleGroupsRegistrations] = useState(null);
    const [bigGroupsRegistrations, setBigGroupsRegistrations] = useState(null);
    const [totalSpotsInLittleGroups, setTotalSpotsInLittleGroups] = useState(null);
    const [totalSpotsInBigGroups, setTotalSpotsInBigGroups] = useState(null);
    const [isActive, setIsActive] = useState('');

    useEffect(async () => {
        const response = await axios(`${API}/api/kindergartens/admission/status`,);
        console.log(response);
        setLittleGroupsRegistrations(response.data.registrationsInFirstAgeGroup);
        setBigGroupsRegistrations(response.data.registrationsInSecondAgeGroup);
        setTotalSpotsInLittleGroups(response.data.spotsInFirstAgeGroup);
        setTotalSpotsInBigGroups(response.data.spotsInSecondAgeGroup);
        setIsActive(response.data.active)
    })
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="card col">
                    <div className="card-body">
                        {littleGroupsRegistrations === 0 ?
                            (<p className="card-text">Duomenys atnaujinami</p>) :
                            (<h5 className="card-title">{littleGroupsRegistrations}</h5>)}
                        <h6 className="card-subtitle mb-2 text-muted">2-3 m amžiaus vaikų grupėse</h6>
                        <p>Viso registracijų į darželius</p>
                    </div>
                </div>
                <div className="card col">
                    <div className="card-body">
                        {bigGroupsRegistrations === 0 ?
                            (<p className="card-text">Duomenys atnaujinami</p>) :
                            (<h5 className="card-title">{bigGroupsRegistrations}</h5>)}
                        <h6 className="card-subtitle mb-2 text-muted">3-5 m amžiaus vaikų grupėse</h6>
                        <p>Viso registracijų į darželius</p>
                    </div>
                </div>
                <div className="card col">
                    <div className="card-body">
                        {totalSpotsInLittleGroups === 0 ?
                            (<p className="card-text">Duomenys atnaujinami</p>) :
                            (<h5 className="card-title">{totalSpotsInLittleGroups}</h5>)}
                        <h6 className="card-subtitle mb-2 text-muted">3-5 m amžiaus vaikų grupėse</h6>
                        <p>Viso laisvų vietų darželiuose</p>
                    </div>
                </div>
                <div className="card col">
                    <div className="card-body">
                        {totalSpotsInBigGroups === 0 ?
                            (<p className="card-text">Duomenys atnaujinami</p>) :
                            (<h5 className="card-title">{totalSpotsInBigGroups}</h5>)}
                        <h6 className="card-subtitle mb-2 text-muted">3-5 m amžiaus vaikų grupėse</h6>
                        <p>Viso laisvų vietų darželiuose</p>
                    </div>
                </div>
            </div>
            <div className="row shadow border rounded mt-5">
                <div className="col-12">
                    <div className="p-3">
                        <h5 className="card-title">Registracijų į darželius statusas: {isActive? "Registracija atidaryta" : "Registracija sustabdyta"}</h5>
                        {/*<h6 className="card-subtitle mb-2 text-muted">*/}
                        {/*    </h6>*/}
                        <StartStopButtonstoKindergRegistration/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EduAdminDashboard;