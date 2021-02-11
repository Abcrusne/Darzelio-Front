import React, {useState, useEffect} from "react";
import axios from "axios";
import UserService from "../../Configuration/UserService";

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
        const {id, value} = event.target
        setChildren(prevState => ({
            ...prevState,
            [id]:value
        }))
    }

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
                setKindergartens(response.data.map(kindergarten => kindergarten.data));
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
                        props.history.push("/dashboard");
                    } else {
                        alert('Registracija nesėkminga, patikrinkite duomenis!');
                    }
                })
                .catch((error) => {console.log(error)});
        } else {alert('Patikrinkite ar visi duomenys teisingi!')}
    }

     return(
         <div>
             <form>
             <div className="input-group mb-3">
                 <select className="form-select-kids" aria-label="kids selection">
                     <option selected>Pasirinkite vaiką</option>
                     {children.map((child) => (
                         <option
                             key={child.childId}
                             value={child.childId}>
                             {child.firstName}{child.lastName}
                         </option>
                     ))}
                 </select>
             </div>
             <div className="input-group mb-3">
                 <select className="form-select" aria-label="Default select example">
                     <option selected>Pasirinkite darželį</option>
                     {kindergartens.map(kindergarten => (
                         <option
                             key={kindergarten.id}
                             value={kindergarten.id}>
                             {kindergarten.name}
                         </option>
                     ))}
                 </select>
             </div>
             </form>
         </div>
     )
};
export default MainRegistrationContainer;