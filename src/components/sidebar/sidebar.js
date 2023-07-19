import React from 'react';
import './Sidebar.css';
import Logo from '../../imgs/logo.png';
import UilEstate from '@iconscout/react-unicons/icons/uil-estate';
import { SidebarData } from '../Data/Data';


const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
        <span>
          sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
     
      {SidebarData.map((item,index) => {

        return (

          <div className = "menuItem"> 
          <item.icon/>
          <span> {item.heading} </span>
          </div>
        )
      })}
        </div>
    </div>
  );
};
export default sidebar;
