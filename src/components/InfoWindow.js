import React from "react";
import '../index.css'

const InfoWindow = ({schoolName}, {schoolDen}) => {

  return (
    <div className='sidebarStyle'>
      <div className="sidebarTitle">
        {schoolName}
        {schoolDen}
      </div>
    </div>
  );
};

export default InfoWindow;
