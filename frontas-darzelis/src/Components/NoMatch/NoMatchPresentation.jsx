import React from 'react';

const NoMatch = (props) => {
  const goApp = () => props.history.push('/');
  return (
    <div className="container">
      <div className=" m-5 text-center ">
        Neteisingas maršrutas
        <button className="btn btn-dark ml-3" onClick={goApp}>
          Grįžti atgal į pradinį prisijungimo puslapį
        </button>
      </div>
    </div>
  );
};

export default NoMatch;
