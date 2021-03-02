import React from 'react';
import UserService from '../../Configuration/UserService';

const NoMatch = (props) => {

  const currentRole = UserService.getRole();
    if (currentRole === '[PARENT]') {
      // alert("Neteisingas maršrutas");
      props.history.push('/tevai');
    } else if (currentRole === '[EDU]') {
      // alert("Neteisingas maršrutas");
      props.history.push('/admin/edu');
    } else if (currentRole === '[ADMIN]') {
      // alert("Neteisingas maršrutas");
      props.history.push('/admin/pradzia');
    }

  return (
    <div className="container">
      
    </div>
  );
};

export default NoMatch;
