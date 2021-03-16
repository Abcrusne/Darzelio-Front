import React , { lazy } from 'react';
import '../../Style/style.css';

import pdf from '../Guide/Edu.pdf'

const EduGuide = () => {
  return (
    <div className="">
      <iframe
        src={pdf}
        title="Naudojimosi instrukcija"
        style={{ marginRight: 0, marginLeft: 170, height: 800, width: 1200 }}
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default EduGuide;
