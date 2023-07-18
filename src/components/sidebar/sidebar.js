import React from 'react';
import './sidebar.css';
import Logo from '../../imgs/logo.png';

const sidebar = () => {
  return(
  <div className="sidebar">
    <div className="Logo">
      <img src={Logo} alt="Logo" />
      <span>
          sh<span>o</span>ps
        </span>
    </div>
  </div>
  )
};
export default sidebar;
