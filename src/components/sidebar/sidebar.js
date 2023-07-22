
import React, { useState } from "react";
import './Sidebar.css';
import Logo from '../../imgs/logo.png';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { SidebarData } from '../Data/Data';
import { menuItem } from '@mui/material';

const sidebar = () => {
  const [selected, setSelected]= useState = 0;

  return (
    <div className="sidebar">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
        <span>
          sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={ selected === index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={() => setSelected(index)}
            >


              <item.icon />
              <span> {item.heading} </span>
            </div>
          );
        })}

       
          <UilSignOutAlt />
        </div>
      </div>
    
  );
};
export default sidebar;