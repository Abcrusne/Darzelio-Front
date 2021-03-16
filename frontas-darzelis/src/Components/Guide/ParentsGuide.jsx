import React, { lazy } from 'react';
import '../../Style/style.css';
import pdf from '../Guide/Tevai.pdf';

const Guide = () => {
  return (
    <div>
      {pdf ? (
        <iframe
          src={pdf}
          title="Naudojimosi instrukcija"
          style={{ marginRight: 0, marginLeft: 170, height: 800, width: 1200 }}
          allowfullscreen
        ></iframe>
      ) : (
        <div>...</div>
      )}
    </div>
  );
};
export default Guide;
