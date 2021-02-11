import React, {useState, useEffect} from "react";
import axios from "axios";
import UserService from "../../Configuration/UserService";
import {API} from "../../Configuration/AppConfig";
import "../../Style/ParentLanding.css"
import MainRegistrationPresentation from "./MainRegistrationPresentation";

const MainRegistrationContainer = (props) => {
    const [children, setChildren] = useState([
        {   childId: "",
            firstName: "",
            lastName: "",
        }
    ])
    const [priorities, setPriorities] = useState(
        {
            firstPriority: "",
            secondPriority: "",
            thirdPriority: "",
            fourthPriority: "",
            fifthPriority: "",
        }
    )
    const [kindergartens, setKindergartens] = useState([]);

    const handleChange = (event) => {
        // const {id, value} = event.target
        setChildren(prevChildren => ({
            ...prevChildren,
            [event.target.name]:event.target.value,
        }))
    }

    useEffect( () => {
        axios
            .get(`${API}/api/users/loggeduserid`)
            .then((res) => {
                UserService.setId(res.data);
                this.setState({
                    name: res.data,
                });
                console.log('user id: ' + this.state.id);
            })
            .catch((err) => console.log(err));
    })

   useEffect(() => {
        const userId = UserService.getId();
        console.log(userId)
         axios
            .get(`${API}/api/users/${userId}/parentdetails/children`)
            .then(response => {
                console.log(response.data)
                // setChildren(prevState => ({
                //     ...prevState
                // }))
                // console.log(children)
            })
            .catch(error => {console.log(error)});
        return (<div></div>

   )}, []);

    useEffect(() => {
        axios
            .get(`${API}/api/kindergartens`)
            .then(response => {
                console.log(response.data)
                setKindergartens(response.data);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(children.childId.length && children.firstPriority.length) {
            const payload = {
                "childId": children.childId,
                "firstPriority": priorities.firstPriority,
                "secondPriority": priorities.secondPriority,
                "thirdPriority": priorities.thirdPriority,
                "fourthPriority": priorities.fourthPriority,
                "fifthPriority": priorities.fifthPriority,
            }
            axios
                .post(`${API}/api/kindergartens/register`, payload, {
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }})
                .then(response => {
                    if(response.data.status === 200){
                        setChildren(prevChildren => ({
                            ...prevChildren
                        }));
                        setPriorities(prevPriorities => ({
                        ...prevPriorities
                        }))
                        alert('Registracija sėkminga!');
                        props.history.push("/tevai");
                    } else {
                        alert('Registracija nesėkminga, patikrinkite duomenis!');
                    }
                })
                .catch((error) => {console.log(error)});
        } else {alert('Patikrinkite ar visi duomenys teisingi!')}
    }

     return(
         <div>
             <MainRegistrationPresentation
                onSubmit={handleSubmit}
             />
         </div>

     )
};
export default MainRegistrationContainer;