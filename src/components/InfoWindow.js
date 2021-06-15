import React from "react";
import '../index.css'

const InfoWindow = ({schoolName}) => {

  return (
    <div className='sidebarStyle'>
      <div className="sidebarTitle">
        {schoolName}
      </div>
    </div>
  );
};

export default InfoWindow;
