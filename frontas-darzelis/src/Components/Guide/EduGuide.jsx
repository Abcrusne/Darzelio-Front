import React from 'react';
import pdf from '../Guide/Edu.pdf';
import '../../Style/style.css';

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
