import React from 'react'
import { useHistory } from 'react-router';



const NextPage=()=> {
    const history = useHistory();
    const addAnotherChild =(e)=>{
        e.preventDefault();
        history.push('/tevai/vaikoregistracija');
    }
    const registerToKindergarten =(e)=>{
        e.preventDefault();
        history.push('/tevai/dashboard');
    }

    return (
        <div className="mt-5 mr-5 ml-5">
           
                <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
               onClick={addAnotherChild}
              >
                Pridėti kitą vaiką
              </button>
          
           
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block "
               onClick={registerToKindergarten}
              >
               Tęsti
              </button>
    
        </div>
    )
}

export default NextPage;
