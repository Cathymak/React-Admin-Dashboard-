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
         </div>

<div className='menu'>

<div className='menuItem'>

<div> <UilEstate/></div>
<span></span>

</div>

</div>
        <span> Dashboard</span>
    </div>





  )
};
export default sidebar;
