import React from 'react';
import { useHistory } from 'react-router';
import '../../Style/style.css';

import '../../Style/UsersLandings.css';

const NextPage = () => {
  const history = useHistory();
  const addAnotherChild = (e) => {
    e.preventDefault();
    history.push('/tevai/vaikoregistracija');
  };
  const registerToKindergarten = (e) => {
    e.preventDefault();
    history.push('/tevai/registracija-i-darzeli');
  };

  return (
    <div className="m-5 d-block">
      <button
        type="submit"
        className="btn btn-success btn-lg btn-block next"
        onClick={addAnotherChild}
      >
        Pridėti kitą vaiką
      </button>

      <button
        type="submit"
        className="btn btn-success btn-lg btn-block next"
        onClick={registerToKindergarten}
      >
        Tęsti
      </button>
    </div>
  );
};

export default NextPage;
