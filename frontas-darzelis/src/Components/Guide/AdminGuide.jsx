import React , { lazy } from 'react';
import '../../Style/style.css';
import pdf from '../Guide/SysAdmin.pdf'

const AdminGuide = () => {
  return (
    <div>
      <iframe
        src={pdf}
        title="Naudojimosi instrukcija"
        style={{ marginRight: 0, marginLeft: 170, height: 800, width: 1200 }}
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default AdminGuide;
