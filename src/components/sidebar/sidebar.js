import React from 'react';
import './Sidebar.css';
import Logo from '../../imgs/logo.png';
import  UilEstate from '@iconscout/react-unicons/icons/uil-estate'


const sidebar = () => {
  return(
  <div className="sidebar">
    <div className="Logo">
      <img src={Logo} alt="Logo" />
      <span>
          sh<span>o</span>ps
        </span>
        <div> <UilEstate/> </div>
        <span> Dashboard</span>
    </div>
  </div>
  )
};
export default sidebar;
